import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyncPage } from './sync';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    SyncPage,
  ],
  imports: [
    IonicPageModule.forChild(SyncPage),
    NgxDatatableModule
  ],
})
export class SyncPageModule {}
