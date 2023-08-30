import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tela3Page } from './tela3.page';

const routes: Routes = [
  {
    path: '',
    component: Tela3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tela3PageRoutingModule {}
