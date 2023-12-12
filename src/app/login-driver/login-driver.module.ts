import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDriverPageRoutingModule } from './login-driver-routing.module';

import { LoginDriverPage } from './login-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDriverPageRoutingModule
  ],
  declarations: [LoginDriverPage]
})
export class LoginDriverPageModule {}
