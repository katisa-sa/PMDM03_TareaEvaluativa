import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AemetPageRoutingModule } from './aemet-routing.module';

import { AemetPage } from './aemet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AemetPageRoutingModule
  ],
  declarations: [AemetPage]
})
export class AemetPageModule {}
