import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  miModelo: any;
  constructor(private router: Router) {
    this.miModelo = {}
  }
  
  ngOnInit() {
  }
  login(){
    
    this.router.navigate(['/login'])
  }

}
