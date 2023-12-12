import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListChoferesPageRoutingModule } from './list-choferes-routing.module';

import { ListChoferesPage } from './list-choferes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListChoferesPageRoutingModule
  ],
  declarations: [ListChoferesPage]
})
export class ListChoferesPageModule {}
