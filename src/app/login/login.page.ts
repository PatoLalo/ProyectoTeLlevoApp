import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    nombre_usuario:string = ""//"ed.maulen"
    password:string = ""//"123321"

    /* Crea usuarios de tipo chofer y usuario normal por defecto */
    
    choferes:any = [
            {id:"1", rut:"18777991K",nombre:"Eduardo",apellido:"Maulen",celular:953046796,marca:"KIA",patente:"FYSK48",numAsientos:3,sexo:"masculino",nombre_usuario:"ed.maulen",password:"123321",direccion:"L. de Manzo 450",tarifa:3000,tipo:"chofer", img:"autos/kiario.jpg"},
            {id:"2", rut:"188695221",nombre:"Patricio",apellido:"Hurtado",celular:975997628,marca:"Toyota",patente:"FCSH96",numAsientos:3,sexo:"masculino",nombre_usuario:"patolalo",password:"123321",direccion:"Valdes 971",tarifa:3000,tipo:"chofer", img:"autos/toyotacorolla.jpg"},
            {id:"3", rut:"187778062",nombre:"Nelson",apellido:"Rojas",celular:975997628,marca:"Peugeot",patente:"SDYL88",numAsientos:3,sexo:"masculino",nombre_usuario:"RojasN",password:"123321",direccion:"Foresta 1800",tarifa:3500,tipo:"chofer", img:"autos/peugeot.jpg"},
            {id:"4", rut:"194779745",nombre:"Paola",apellido:"Gonzalez",celular:945632214,marca:"Chevrolet",patente:"ZQNK55",numAsientos:3,sexo:"femenino",nombre_usuario:"Pao96",password:"123321",direccion:"Liberta 435",tarifa:2500,tipo:"chofer", img:"autos/chevrolet.jpg"},
            {id:"5", rut:"202362589",nombre:"Nicolas",apellido:"Mejias",celular:965344566,marca:"KIA",patente:"GHNS56",numAsientos:3,sexo:"masculino",nombre_usuario:"Nicoog",password:"123321",direccion:"Los poetas 0875",tarifa:2000,tipo:"chofer", img:"autos/kiacerato.jpg"},
            {id:"6", rut:"186459484",nombre:"Diego",apellido:"Calderon",celular:945632214,marca:"Renault",patente:"POSL79",numAsientos:3,sexo:"masculino",nombre_usuario:"D.Calderon",password:"123321",direccion:"Chacra Marin 2635",tarifa:3000,tipo:"chofer", img:"autos/renault.jpg"},
            {id:"7", rut:"164578956",nombre:"Gustavo",apellido:"Arriagada",celular:978451278,marca:"chevrolet",patente:"ASKJ41",numAsientos:3,sexo:"Masculino",nombre_usuario:"Gus96",password:"123321",direccion:"Liberta 4",tarifa:2500,tipo:"chofer", img:"autos/chevroletcruze.jpg"},
            {id:"8", rut:"194564567",nombre:"Noelia",apellido:"Jara",celular:965412387,marca:"Suzuki",patente:"AWER45",numAsientos:3,sexo:"femenino",nombre_usuario:"NoeUber",password:"123321",direccion:"Liberta 435",tarifa:2000,tipo:"chofer", img:"autos/suzuki.jpg"},
            {id:"9", rut:"214567894",nombre:"Tomas",apellido:"Alvares",celular:978645989,marca:"Chery",patente:"LITT69",numAsientos:3,sexo:"masculino",nombre_usuario:"Torry",password:"123321",direccion:"ugalde 1818",tarifa:3500,tipo:"chofer", img:"autos/chery.jpg"},
            {id:"10", rut:"",nombre:"Joel",apellido:"Leal",celular:967534651,marca:"Yamaha",patente:"",numAsientos:1,"sexo":"masculino",nombre_usuario:"joel.l",password:"123321",direccion:"Bollenar",tipo:"chofer", img:"autos/"},
        ]

    
    usuarios:any = [
        {id:"1", rut:"18777991K",nombre:"Eduardo",apellido:"Maulen",celular:953046796,sexo:"masculino",nombre_usuario:"ed.user",password:"123321",tipo:"usuario", historial:[]},

        {id:"2", rut:"188695221",nombre:"Patricio",apellido:"Hurtado",celular:975997628, sexo:"masculino",nombre_usuario:"patolalo.user",password:"123321",tipo:"usuario",historial:[]},     
    ]
    
  constructor(
    private nav: NavController,
    private alert: AlertController
  ) { }

  ngOnInit() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")!)
    localStorage.setItem("choferes_disponibles", JSON.stringify([]))

    if (usuarios == null) {
        localStorage.setItem("choferes", JSON.stringify([]))
        localStorage.setItem("usuarios", JSON.stringify([]))
        localStorage.setItem("choferes", JSON.stringify(this.choferes))
        localStorage.setItem("usuarios", JSON.stringify(this.usuarios))
        localStorage.setItem("choferes_disponibles", JSON.stringify([]))
        console.log(this.choferes);
    }
  }


  login(){
      
      let usuarios = JSON.parse(localStorage.getItem("usuarios")!)
      console.log(usuarios);
    let choferes = JSON.parse(localStorage.getItem("choferes")!)
    let permite_login = false
    let session_user = {}

    // Busca el usuario ingresado en el listado de usuarios
    if (usuarios !== null) {
        for(let user of usuarios){
            if (user.nombre_usuario == this.nombre_usuario && user.password == this.password) {
                permite_login = true
                session_user = user
                break
            }
        }
    }

    //busca el usuario ingresado en el listado de choferes
    if (choferes !== null) {
        for(let chofer of choferes){
            if (chofer.nombre_usuario == this.nombre_usuario && chofer.password == this.password) {
                permite_login = true
                session_user = chofer
                break
            }
        }
    }

    console.log(this.validar_formulario());
    
    if (permite_login) {
       localStorage.setItem("session_user", JSON.stringify(session_user))
       this.nav.navigateForward(['/bienvenido'])
    }else{
        this.presentAlert("Credenciales incorrectas")
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

  validar_formulario(){
    let m = "ingrese campo"
  }
  
  registroChoferes(){
    this.nav.navigateForward(['/bienvenido'])
  }
}
