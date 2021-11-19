import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recuperate',
  templateUrl: './recuperate.page.html',
  styleUrls: ['./recuperate.page.scss'],
})
export class RecuperatePage implements OnInit {

  isCaptchaValid = false;

  miModelo: any;
  constructor(public toastController: ToastController) {
    this.miModelo = {}

   }
  enviarcorreo(){
    //llamar un toast
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se a enviado un correo, para restablecer contraseña',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }

  get siteKey(){
    return environment.recaptcha.siteKey;
  }

  captchaResolved(ev) {
    console.log("Captcha resolved", ev);

    this.isCaptchaValid = true
  }
}
