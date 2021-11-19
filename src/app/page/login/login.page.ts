import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  
  constructor(public fb: FormBuilder, public alertController: AlertController,
    public navCtrl: NavController ) {

    this.formularioLogin = this.fb.group({
      'usuario1' : new FormControl("", Validators.required),
      'password' : new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {}
 

  async logueado(){
    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
       this.navCtrl.navigateRoot('logueado');

      }else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
  }
}
