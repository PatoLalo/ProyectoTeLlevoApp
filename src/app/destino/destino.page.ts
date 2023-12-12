import { Component, OnInit, ElementRef, NgZone, ViewChild} from '@angular/core';
import { AlertController, AnimationController, NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
declare var google: any;
@Component({
  selector: 'app-destino',
  templateUrl: './destino.page.html',
  styleUrls: ['./destino.page.scss'],
})
export class DestinoPage implements OnInit {
    num_asientos:string = ""
  constructor(
    private nav : NavController,
    private anim : AnimationController,
    private platform: Platform,
    private zone:NgZone,
    private alert: AlertController
  ) { }

  ngOnInit() {
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

  /* MAPS */
  @ViewChild('map') mapElement: ElementRef | undefined;
  session:any = JSON.parse(localStorage.getItem("session_user")!)

  public map: any;
  public start: any = "Duoc UC: Sede Melipilla - Serrano, Melipilla, Chile";
  public end: any = "Valdés, Melipilla, Chile";
  public latitude: any;
  public longitude: any;
  public directionsService: any;
  public directionsDisplay: any;
  public autocompleteItems: any

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.initMap()
    })
  }

  initMap() {
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay = new google.maps.DirectionsRenderer;
    let latLng = new google.maps.LatLng(this.latitude, this.longitude);
    let mapOptions = {
      center: latLng,
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement!.nativeElement, mapOptions);
    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute();
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response: any, status: string) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  /* async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.initMap();
  } */

  updateSearchResults() {
    let GoogleAutocomplete = new google.maps.places.AutocompleteService();
    if (this.end == '') {
      this.autocompleteItems = [];
      return;
    }
    GoogleAutocomplete!.getPlacePredictions({ input: this.end },
      (predictions: any, status: any) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.splice(0,2).forEach((prediction: any) => {
            this.autocompleteItems!.push(prediction);
          });
        });
      });
  }
  selectSearchResult(item: any) {
    this.end = item.description
    this.autocompleteItems = []
    this.initMap()
  }

  buscarChoferesDisponibles(){
    let destino:string = this.end
    let num_asientos:number = isNaN(parseInt(this.num_asientos))? 0 : parseInt(this.num_asientos)
    let choferes = JSON.parse(localStorage.getItem('choferes')!)
    let choferes_disponibles:any = []
    let disponibles = false
    let messageAlert:string = ""
    let array_destino:any

    if (choferes !== null) {
        console.log("number "+num_asientos);
        
        //sanea destino
        destino = this.sanear_destino(destino)
        console.log("destino "+destino);

        //convierte destino en arreglo
        array_destino = destino.split(' ')

        for (let chof of choferes) {
            console.log("asientos disponibles "+chof.numAsientos);
            
            for (let i = 0; i < array_destino.length; i++) {
                if (chof.nombre.length > 0 && array_destino[i].length > 0) {
                    
                    if (chof.direccion.toLowerCase().includes(array_destino[i]) && chof.numAsientos >= num_asientos) {
                        console.log('coincide '+array_destino[i]+ ' con '+chof.direccion.toLowerCase());
                        choferes_disponibles.push(chof)
                        disponibles = true
                        break;
                    }
                }
            }
        }
    }
    

    if (!disponibles) {
        messageAlert = "Sin choferes disponibles para el destino "+this.end

        this.presentAlert(messageAlert)
        console.log(messageAlert);
    }else{
        console.log(choferes_disponibles);
        
        localStorage.setItem('choferes_disponibles', JSON.stringify(choferes_disponibles))
        
        localStorage.setItem("end",this.end) 

        this.nav.navigateForward(['/list-choferes/'])
    }

  }

  sanear_destino(destino:string){
    //quita las comas
    while (destino.search(',') != -1) {
        destino = destino.replace(',','')
    }

    //minusculas
    destino = destino.toLowerCase()

    //quita acentos
    destino = destino.replace('á','a')
    destino = destino.replace('é','e')
    destino = destino.replace('í','i')
    destino = destino.replace('ó','o')
    destino = destino.replace('ú','u')

    //quita chile
    destino = destino.replace('chile','')

    return destino
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
