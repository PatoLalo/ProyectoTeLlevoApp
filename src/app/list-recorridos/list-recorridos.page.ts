import { Component, OnInit } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-recorridos',
  templateUrl: './list-recorridos.page.html',
  styleUrls: ['./list-recorridos.page.scss'],
})
export class ListRecorridosPage implements OnInit {
    // session = JSON.parse(localStorage.getItem("session_user")!)
    session:any = []

  constructor(
    private nav : NavController,
    private anim: AnimationController
  ) { }

  ngOnInit() {
    console.log(this.session);
    
  }

  ionViewDidEnter(){
    this.session = JSON.parse(localStorage.getItem("session_user")!)
  }

  animaIcon(index:number, destino:String){
    this.anim.create().addElement(document.querySelectorAll(".menu-icon")[index]!)
    .duration(340).iterations(2).keyframes([
        { offset: 0, "transform": "translateY(-3px)"},
        { offset: .5, "transform": "translatY(5px)"},
        { offset: 1, "transform": "translateY(0px)"},
    ])
    .onFinish(()=>this.irA(destino))
    .play()
  }

  animaIconCard(index:number, destino:String, idChofer:number){
    this.anim.create().addElement(document.querySelectorAll(".icon-disponibilidad")[index]!)
    .duration(340).iterations(1).keyframes([
        { offset: 0, "transform": "scale(1)"},
        { offset: .5, "transform": "scale(1.7)"},
        { offset: 1, "transform": "scale(1)"},
    ])
    .onFinish(()=>this.irAContactar(idChofer))
    .play()
  }

  irA(destino:String){
    this.nav.navigateForward(['/'+destino])
  }

  irAContactar(idChofer:number){
    console.log(idChofer);
    
    this.nav.navigateForward(['/contactar/'+idChofer])
  }

  logout(){
    console.log("pasa por logout");
    
    localStorage.removeItem("session_user")
    localStorage.removeItem("choferes_disponibles")
    localStorage.removeItem("end")

    this.nav.navigateForward(['/login'])
    
  }
}
