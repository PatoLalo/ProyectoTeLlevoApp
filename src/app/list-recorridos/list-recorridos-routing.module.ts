import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRecorridosPage } from './list-recorridos.page';

const routes: Routes = [
  {
    path: '',
    component: ListRecorridosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRecorridosPageRoutingModule {}
