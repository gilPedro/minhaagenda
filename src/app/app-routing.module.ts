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
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./paginas/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'edita-contato',
    loadChildren: () => import('./paginas/edita-contato/edita-contato.module').then( m => m.EditaContatoPageModule)
  },
  {
    path: 'tarefa',
    loadChildren: () => import('./paginas/tarefa/tarefa.module').then( m => m.TarefaPageModule)
  },
  {
    path: 'edita-tarefa',
    loadChildren: () => import('./paginas/edita-tarefa/edita-tarefa.module').then( m => m.EditaTarefaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
