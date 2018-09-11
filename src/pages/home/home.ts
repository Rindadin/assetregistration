import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  asset: {id: string, name:string, type: string };
  assetType: Array<any>;
  assetList: Array<any>;

  constructor(public storage: Storage, public navCtrl: NavController) {
    this.asset = {
      id:null,
      name:null,
      type:null

    };

    this.assetType = [
      {id:"01", name:"pump"},
      {id:"02", name:"valve"},
      {id:"03", name:"motor"},
      {id:"04", name:"penstock"},
      {id:"05", name:"generator"}
    ];

    this.storage.get('ASSET_LIST').then((val) =>{
      
      if(val) {
        this.assetList = JSON.parse(val);
      }else {
        this.assetList = [];
      }
    })

    console.log(this.assetType);
    this.assetList = [];

  }

  saveAsset(){
    this.assetList.push(this.asset);
    console.log(this.assetList);
    this.storage.set('ASSET_LIST',JSON.stringify(this.assetList));

  }

  goToSyncPage(){
    this.navCtrl.push('SyncPage');
  }


}
