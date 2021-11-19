import { Component, OnInit } from '@angular/core';

import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ValidatorsModule } from '../../validators/validators.module';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 formularioRegistro: FormGroup;

constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController){
  
  this.formularioRegistro = this.fb.group({
    'usuario1' : new FormControl("", Validators.required),
    'nombre' : new FormControl("", Validators.required),
    'correo' : new FormControl("", Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])),
    'carrera' : new FormControl("", Validators.required),
    'password': ['', [Validators.required, Validators.minLength(6)]],
    'confirmacionPassword': ['', [Validators.required, Validators.minLength(6)]]
    }, { 
      validator: ValidatorsModule('password', 'confirmacionPassword')
    })
  

}

  ngOnInit() {
  }

    async guardar(){
      var f = this.formularioRegistro.value;

      if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header: 'Datos incompletos',
          message: 'Tienes que llenar todos los datos',
          cssClass:'buttonCss',
          buttons: [{
            text: 'Aceptar',
            }
          
        
          
        ]
        });

        
        await alert.present();
        return;
      }
        

    
      var usuario = {
        usuario1: f.usuario1,
        password: f.password
      }
      
      

      localStorage.setItem('usuario',JSON.stringify(usuario));
      this.navCtrl.navigateRoot('home');
        localStorage.setItem('ingresado', 'true');

        
      
    }

    
    


  }  
 


