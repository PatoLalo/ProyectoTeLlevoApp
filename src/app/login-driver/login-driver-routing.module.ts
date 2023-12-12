import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDriverPage } from './login-driver.page';

const routes: Routes = [
  {
    path: '',
    component: LoginDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginDriverPageRoutingModule {}
