import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tela-confirmar/:nome/:email/:telefone',

    loadChildren: () => import('./tela-confirmar/tela-confirmar.module').then( m => m.TelaConfirmarPageModule)
  },
  {
    path: 'tela3/:telefone',
    loadChildren: () => import('./tela3/tela3.module').then( m => m.Tela3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

