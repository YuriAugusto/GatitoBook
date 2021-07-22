import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent],
})/* em exports: eu declaro tudo que será exportado para que no app.module eu importe o modulo atual e por fim possa utilizar esse os exports em toda aplicação*/
export class HomeModule { }
