import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrExamplePageRoutingModule } from './qr-example-routing.module';

import { QrExamplePage } from './qr-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrExamplePageRoutingModule
  ],
  declarations: [QrExamplePage]
})
export class QrExamplePageModule {}
