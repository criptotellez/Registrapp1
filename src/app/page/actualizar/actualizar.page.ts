import { Component, OnInit} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router,NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})


export class ActualizarPage implements OnInit {
  
  


  constructor(public toastController: ToastController, private router: Router) { 
    
  }

  ngOnInit() {
  }

  dato: any={
    user:"",
  }
 
  enviarmensaje(){
    
      let navigationExtras: NavigationExtras={
        state: {user: this.dato.user}
        
      };
      
      this.router.navigate(['/home'],navigationExtras)
      this.presentToast();
    
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se actualizaron los datos: '+this.dato.user,
      duration: 2000
    });
    toast.present();
  }
}

