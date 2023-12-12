import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, AnimationController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.page.html',
  styleUrls: ['./contactar.page.scss'],
})
export class ContactarPage implements OnInit {
    id=this.route.snapshot.paramMap.get("id")
    chofer:any = this.get_choferFromStorage()
    session:any = JSON.parse(localStorage.getItem("session_user")!)
    usuarios:any = JSON.parse(localStorage.getItem("usuarios")!)

    
 constructor(
    private nav : NavController,
    private anim : AnimationController,
    private route :ActivatedRoute,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    console.log(this.id);

  }

  get_choferFromStorage(){
    let choferes = JSON.parse(localStorage.getItem("choferes")!)
    let chofer:any

    //recorre choferes en busca del id 
    if (choferes !== null) {
        for(let chof of choferes){
            if (chof.id == this.id) {
                chofer = chof
                break
            }
        }
    }

    return chofer
 }

 tomar_viaje(){
    let end:any = localStorage.getItem("end")
    
    for(let user of this.usuarios){
        if (user.id == this.session.id ) {
            user.historial.push(
                {chofer_id: this.chofer.id, chofer: `${this.chofer.nombre} ${this.chofer.apellido}`, direccion: end, tarifa:this.chofer.tarifa}
            )
            
            this.session.historial.push( {chofer_id: this.chofer.id, chofer: `${this.chofer.nombre} ${this.chofer.apellido}`, direccion: end, tarifa:this.chofer.tarifa}) 
            localStorage.setItem("session_user", JSON.stringify(this.session))
            
            break
        }
    }

    localStorage.setItem("usuarios", JSON.stringify(this.usuarios))

    
    this.presentAlert("Viaje registrado")
    this.nav.navigateForward(['/list-choferes'])
 }


  animaIcon(index:number, destino:String){
    this.anim.create().addElement(document.querySelectorAll(".menu-icon")[index]!)
    .duration(200).iterations(2).keyframes([
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

  async presentAlert(mensaje:string){
    const alert=await this.alertController.create({
        header:"",
        message:mensaje,
        buttons:['OK']
    });
    await alert.present()
  }

  logout(){
    console.log("pasa por logout");
    
    localStorage.removeItem("session_user")
    localStorage.removeItem("choferes_disponibles")
    localStorage.removeItem("end")

    this.nav.navigateForward(['/login'])
    
  }
}
