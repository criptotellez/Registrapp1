import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperatePageRoutingModule } from './recuperate-routing.module';

import { RecuperatePage } from './recuperate.page';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperatePageRoutingModule,
    RecaptchaModule
  ],
  declarations: [RecuperatePage]
})
export class RecuperatePageModule {}
