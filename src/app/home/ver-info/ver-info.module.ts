import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerInfoPageRoutingModule } from './ver-info-routing.module';

import { VerInfoPage } from './ver-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VerInfoPageRoutingModule
  ],
  declarations: [VerInfoPage]
})
export class VerInfoPageModule {}
