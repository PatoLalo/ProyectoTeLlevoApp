import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListRecorridosPageRoutingModule } from './list-recorridos-routing.module';

import { ListRecorridosPage } from './list-recorridos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListRecorridosPageRoutingModule
  ],
  declarations: [ListRecorridosPage]
})
export class ListRecorridosPageModule {}
