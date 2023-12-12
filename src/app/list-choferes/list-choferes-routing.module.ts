import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListChoferesPage } from './list-choferes.page';

const routes: Routes = [
  {
    path: '',
    component: ListChoferesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListChoferesPageRoutingModule {}
