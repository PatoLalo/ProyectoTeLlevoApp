import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
    nombre: string= ""//"Victoria "
    apellido: string =""//"Soto"
    celular: number = 0 //938291823
    sexo: string = ""//"Femenino"
    nombre_usuario: string = ""//"vita"
    password: string =""//"1234"
    usuarioExistente: boolean=false

  constructor(
    private nav : NavController,
    private alert : AlertController
  ) { }

  ngOnInit() {
  }

  registrar_usuario(){

    let usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      celular: this.celular,
      sexo: this.sexo,
      nombre_usuario: this.nombre_usuario,
      password: this.password,
      historial: [],
      tipo: "usuario"
    }

    if(localStorage.getItem("usuarios") == null){
      localStorage.setItem("usuarios",JSON.stringify([usuario]))
    }else{
      let usuarios =JSON.parse(localStorage.getItem("usuarios")!) 

      let encontrado = false
      for(let user of usuarios){
        if(user.nombre_usuario == usuario.nombre_usuario ){
          encontrado = true
          break
        }
      }

      if(!encontrado){
        usuarios.push(usuario)
        this.presentAlert("Usuario agregado");
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
      }else{
        this.presentAlert("El usuario "+this.nombre_usuario+" ya existe")
      }
    } 
  }

  atras(){
    this.nav.navigateForward(['/login'])
  }

  async presentAlert(mensaje:string){
    const alert=await this.alert.create({
        header:"",
        message:mensaje,
        buttons:['OK']
    });

    await alert.present()
}
}
