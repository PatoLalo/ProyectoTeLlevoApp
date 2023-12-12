import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrExamplePage } from './qr-example.page';

const routes: Routes = [
  {
    path: '',
    component: QrExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrExamplePageRoutingModule {}
