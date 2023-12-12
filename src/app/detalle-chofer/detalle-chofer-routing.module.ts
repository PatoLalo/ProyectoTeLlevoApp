import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleChoferPage } from './detalle-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleChoferPageRoutingModule {}
