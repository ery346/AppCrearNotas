import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MostrarNotasPageModule } from './mostrar-notas/mostrar-notas.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MostrarNotasPageModule
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
