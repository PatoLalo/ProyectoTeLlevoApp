import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapExamplePage } from './map-example.page';

const routes: Routes = [
  {
    path: '',
    component: MapExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapExamplePageRoutingModule {}
