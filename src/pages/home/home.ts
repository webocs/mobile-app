import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { LoginPage } from '../login/login';
import { RegistroPersonalDataPage } from '../registro/personal-data/personal-data';
import { AuthProvider } from '../../providers/auth/auth';
import { VerificaCodigoPage } from '../verifica-codigo/verifica-codigo';
import { EscanerDniPage } from '../escaner-dni/escaner-dni';
import { WaitingValidationPage } from '../registro/waiting-validation/waiting-validation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mostrarMenu: boolean = false;

  constructor(public authService: AuthProvider,
    private barcodeScanner: BarcodeScanner, public navCtrl: NavController) {

  }  

  login() {
    this.navCtrl.push(LoginPage);
  }

  registro() {
    // this.navCtrl.push(RegistroPersonalDataPage);
    this.navCtrl.push(EscanerDniPage);

  }

  codigo() {
    this.navCtrl.push(VerificaCodigoPage);
  }
}
