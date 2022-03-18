import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'mostrar-notas',
    loadChildren: () => import('./mostrar-notas/mostrar-notas.module').then( m => m.MostrarNotasPageModule)
  },
  {
    path: 'nueva-nota',
    loadChildren: () => import('./nueva-nota/nueva-nota.module').then( m => m.NuevaNotaPageModule)
  },
  {
    path: 'ver-info',
    loadChildren: () => import('./ver-info/ver-info.module').then( m => m.VerInfoPageModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
