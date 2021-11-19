
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';





@Component({
  selector: 'app-logueado',
  templateUrl: './logueado.page.html',
  styleUrls: ['./logueado.page.scss'],
})
export class LogueadoPage implements OnInit{
  user:String;
  
  constructor(public alertController: AlertController,
    public navCtrl: NavController, private menu: MenuController,
    private activeroute:ActivatedRoute, private router:Router, private menuCtrl: MenuController ) {


    this.activeroute.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation().extras.state){
        this.user=this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user)
      }
    })
  
  }
  
  

  ngOnInit() {
  }
 
  
  toggleMenu(){
    this.menuCtrl.toggle();
    
  } 
  
  
}
