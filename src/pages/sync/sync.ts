import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-sync',
  templateUrl: 'sync.html',
})
export class SyncPage {
  assetList: Array<any>
  tablestyle = 'bootstrap';
  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.assetList = [];
  }

  switchStyle(){
    if (this.tablestyle == 'dark') {
      this.tablestyle = 'bootstrap'
    } else { 
      this.tablestyle = 'dark';

    }
  }

  ionViewDidLoad() {

    this.storage.get('ASSET_LIST').then((val) =>{
      
      if(val) {
        this.assetList = JSON.parse(val);
        console.log(this.assetList);
      }else {
        this.assetList = [];
        console.log(this.assetList);
      }
    })

   
  }

}
