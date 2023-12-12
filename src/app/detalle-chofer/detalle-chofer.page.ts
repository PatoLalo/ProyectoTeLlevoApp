import { Component, OnInit } from '@angular/core';
import { AlertController, AnimationController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-chofer',
  templateUrl: './detalle-chofer.page.html',
  styleUrls: ['./detalle-chofer.page.scss'],
})
export class DetalleChoferPage implements OnInit {

    id=this.route.snapshot.paramMap.get("id")
    chofer:any = this.get_choferFromStorage()
    session:any = JSON.parse(localStorage.getItem("session_user")!)

  constructor(
    private nav : NavController,
    private anim : AnimationController,
    private route :ActivatedRoute,
    private alertController : AlertController
  ) { }

  ngOnInit() {
    
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

    console.log(chofer);
    
    return chofer
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

  irContactar(idChofer:number){
    this.nav.navigateForward(['/contactar/'+idChofer])
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
