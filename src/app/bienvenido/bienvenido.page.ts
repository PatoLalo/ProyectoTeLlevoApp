import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  session_user = JSON.parse(localStorage.getItem("session_user")!)

  constructor(
    private nav : NavController
  ) { }

  ngOnInit() {
  }

  
  irA(destino:String){
    console.log(this.session_user);
    this.nav.navigateForward(['/'+destino])
  }
}
