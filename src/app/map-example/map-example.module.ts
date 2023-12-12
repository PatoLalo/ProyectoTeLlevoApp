import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapExamplePageRoutingModule } from './map-example-routing.module';

import { MapExamplePage } from './map-example.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapExamplePageRoutingModule
  ],
  declarations: [MapExamplePage]
})
export class MapExamplePageModule {}
