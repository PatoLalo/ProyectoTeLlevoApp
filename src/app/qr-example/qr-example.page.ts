import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr-example',
  templateUrl: './qr-example.page.html',
  styleUrls: ['./qr-example.page.scss'],
})
export class QrExamplePage implements OnInit {
    texto = ""
  constructor() { }

  ngOnInit() {
  }

//async quiere decir que tiene ejecuciones asincronas
async leerQR () {
  await BarcodeScanner.checkPermission({ force: true });

  BarcodeScanner.hideBackground();
    document.querySelector('body')?.classList.add('scanner-active');
    document.querySelector('#contenedor')?.classList.add('scanner-active');
  const result = await BarcodeScanner.startScan(); 

  if (result.hasContent) {
   this.texto = result.content; 
  }
};

detenerQR (){
    BarcodeScanner.showBackground();
    document.querySelector('body')?.classList.remove('scanner-active');
    document.querySelector('#contenedor')?.classList.remove('scanner-active');
    BarcodeScanner.stopScan();
  };
}
