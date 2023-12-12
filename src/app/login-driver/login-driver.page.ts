import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-driver',
  templateUrl: './login-driver.page.html',
  styleUrls: ['./login-driver.page.scss'],
})
export class LoginDriverPage implements OnInit {
    rut:string = ""//"18777991K"
    nombre:string = ""//"Eduardo"
    apellido:string = ""//"Maulen"
    celular:number = 0//953046796
    marca:string = ""//"KIA"
    patente:string = ""//"FYSK48"
    numAsientos: number = 3
    sexo:string = ""//"masculino"
    nombre_usuario:string = ""//"ed.maulen"
    password:string = ""//"123321"

  constructor(
    private nav : NavController,
    private alertController : AlertController
  ) { } 

  ngOnInit() {
  }

  registrar_chofer(){

    let chofer = 
        {
            rut:this.rut, 
            nombre:this.nombre, 
            apellido:this.apellido, 
            celular:this.celular, 
            marca:this.marca, 
            patente:this.patente, 
            numAsientos:this.numAsientos, 
            sexo:this.sexo, 
            nombre_usuario:this.nombre_usuario,
            password:this.password,
            direccion:"",
            tipo:"chofer"
        }
    

    // VERIFICA SI CHOFERES EXISTE EN EL LOCALSTORAGE
    if (localStorage.getItem("choferes") == null) {
        localStorage.setItem("choferes", JSON.stringify([chofer]))
        
        console.log("El usuario se creó existosamente");
        this.nav.navigateForward(['/login'])
    }else{
        const choferes = JSON.parse(localStorage.getItem("choferes")!)
        let permite_insert = true

        for(let chof of choferes){
            if (chof.rut == chofer.rut || chof.nombre_usuario == chofer.nombre_usuario) {
                permite_insert = false        
            }
        }

        if (permite_insert) { 
            choferes.push(chofer)
            localStorage.setItem("choferes", JSON.stringify(choferes))
            console.log("El usuario se creó existosamente");
            this.nav.navigateForward(['/login'])
        }else{
            console.log("YA EXISTE");
            
            this.presentAlert("El usuario ya existe")
        }
    }
  }

  validar_registro(){

  }

  async presentAlert(mensaje:string){
    const alert=await this.alertController.create({
        header:"",
        message:mensaje,
        buttons:['OK']
    });
    await alert.present()
  }

  atras(){
    this.nav.navigateForward(['/login'])
  }
}
