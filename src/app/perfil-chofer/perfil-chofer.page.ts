import { Component, OnInit } from '@angular/core';
import { AlertController, AnimationController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfil-chofer',
  templateUrl: './perfil-chofer.page.html',
  styleUrls: ['./perfil-chofer.page.scss'],
})
export class PerfilChoferPage implements OnInit {
    perfil = JSON.parse(localStorage.getItem("session_user")!)
    direccion = this.perfil.direccion
    celular = this.perfil.celular
    tarifa = `$${this.perfil.tarifa}`
    session:any = JSON.parse(localStorage.getItem("session_user")!)

  constructor(
    private nav : NavController,
    private anim : AnimationController,
    private alert : AlertController
  ) { }

  ngOnInit() {
  }

  guardar_cambios(){
    let choferes = JSON.parse(localStorage.getItem("choferes")!)
    let session = JSON.parse(localStorage.getItem("session_user")!)
    let editado = false
    for(let chofer of choferes){
        if (chofer.id == session.id) {
            console.log(chofer)
            chofer.direccion = this.direccion
            chofer.celular = this.celular
            chofer.tarifa = this.tarifa

            session.direccion = this.direccion
            session.celular = this.celular
            session.tarifa = this.tarifa
            
            editado = true
            break
        }
    }

    if (editado) {
        localStorage.setItem("choferes", JSON.stringify(choferes))
        localStorage.setItem("session_user", JSON.stringify(session))
        this.presentAlert("Datos actualizados")
    }

}
    async presentAlert(mensaje:string){
        const alert=await this.alert.create({
            header:"",
            message:mensaje,
            buttons:['OK']
        });

        await alert.present()
    }

  animaIcon(index:number, destino:String){
    console.log(index);
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

  logout(){
    console.log("pasa por logout");
    
    localStorage.removeItem("session_user")
    localStorage.removeItem("choferes_disponibles")
    localStorage.removeItem("end")

    this.nav.navigateForward(['/login'])
    
  }

}
