import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleChoferPageRoutingModule } from './detalle-chofer-routing.module';

import { DetalleChoferPage } from './detalle-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleChoferPageRoutingModule
  ],
  declarations: [DetalleChoferPage]
})
export class DetalleChoferPageModule {}
