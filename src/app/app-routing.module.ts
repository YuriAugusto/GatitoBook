import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',//se a url for vazia ele faz o redirecionamento através do redirectTo
    pathMatch: 'full',//faz o tratamento de retirar os espaços, ex: se o usuário digitar a url: google .com, com o pathMath: 'full' a url será lida assim: google.com
    redirectTo: 'home',//aqui eu defino o componente que será exibido
  },
  {
    path: 'home',
    loadChildren:() => import('./home/home.module').then((m) => m.HomeModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
