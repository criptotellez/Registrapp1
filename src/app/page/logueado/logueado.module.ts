import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogueadoPageRoutingModule } from './logueado-routing.module';

import { LogueadoPage } from './logueado.page';
import { MenuComponent } from 'src/app/components/menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogueadoPageRoutingModule,
    
  ],
  exports: [],
  declarations: [LogueadoPage]
})
export class LogueadoPageModule {}
