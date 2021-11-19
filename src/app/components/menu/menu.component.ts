import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  

  constructor(public alertController: AlertController, public navCtrl: NavController, private router: Router) { }
  
  async salir (){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Desea cerrar Sesion?',
      cssClass:'buttonCss',
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'customClass',
          handler: () => {
            
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            localStorage.clear();
            
            this.navCtrl.navigateRoot('home');
            
          }
        }
      ]
    });

  await alert.present();
}
  ngOnInit() {}
   
  dato: any={
    user:"",
  }
  
  
  actualizarDatos(){
    
      
      let navigationExtras: NavigationExtras={
        state: {user: this.dato.user}
        
      };
      
      this.router.navigate(['/actualizar'],navigationExtras)
      
  
    
  }
  
}

