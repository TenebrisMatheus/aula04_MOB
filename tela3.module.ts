import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tela3PageRoutingModule } from './tela3-routing.module';

import { Tela3Page } from './tela3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tela3PageRoutingModule
  ],
  declarations: [Tela3Page]
})
export class Tela3PageModule {}
