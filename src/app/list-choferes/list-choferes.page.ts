import { Component, OnInit } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-choferes',
  templateUrl: './list-choferes.page.html',
  styleUrls: ['./list-choferes.page.scss'],
})
export class ListChoferesPage implements OnInit {
    list_choferes:any = JSON.parse(localStorage.getItem("choferes")!)
    list_choferes_disponibles:any = []
    session:any = JSON.parse(localStorage.getItem("session_user")!)
    constructor(
    private nav : NavController,
    private anim : AnimationController
  ) { }

  ionViewDidEnter(){
    this.list_choferes_disponibles =  JSON.parse(localStorage.getItem("choferes_disponibles")!)
  }
  
  ngOnInit() {
    console.log(this.list_choferes_disponibles);
    
    if (this.list_choferes_disponibles.length > 0) {
        console.log("largo "+this.list_choferes_disponibles.length);
    }  
  }


  expand(index:number, idChofer:number){
    this.anim.create().addElement(document.querySelectorAll(".info-expand")[index]!)
    .duration(200).iterations(2).keyframes([
        { offset: 0, "transform": "translateY(-3px)"},
        { offset: .5, "transform": "translatY(5px)"},
        { offset: 1, "transform": "translateY(0px)"},
    ])
    .onFinish(()=>this.irDetalleChofer(idChofer))
    .play()
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

  irA(destino:String){
    this.nav.navigateForward(['/'+destino])
  }

  irDetalleChofer(idChofer:number){
    this.nav.navigateForward(['/detalle-chofer/'+idChofer])
  }

 
}
