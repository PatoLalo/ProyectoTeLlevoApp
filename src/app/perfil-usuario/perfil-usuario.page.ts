import { Component, OnInit } from '@angular/core';
import { AlertController, AnimationController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
    session = JSON.parse(localStorage.getItem("session_user")!)

    nombre: string= this.session.nombre
    apellido: string = this.session.apellido
    sexo: string = this.session.sexo
    telefono: number = this.session.celular
    nombreUser: string = this.session.nombre_usuario
    password: string = this.session.password

  constructor(
    private nav : NavController,
    private anim : AnimationController,
    private alert : AlertController
  ) { }

  ngOnInit() {
  }

  guardar_cambios(){
    let usuarios = JSON.parse(localStorage.getItem("usuarios")!)
    let session = JSON.parse(localStorage.getItem("session_user")!)
    let editado = false
    for(let user of usuarios){
        if (user.id == session.id) {
            console.log(user)
            user.celular = this.telefono
            user.nombre_usuario = this.nombreUser
            session.celular = this.telefono
            session.nombre_usuario = this.nombreUser
            
            editado = true
            break
        }
    }

    if (editado) {
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
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
