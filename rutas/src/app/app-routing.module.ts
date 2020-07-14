//Modulos
import { NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { AutosComponent } from './components/autos/autos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  {path: 'autos', component: AutosComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'fire', component: Page404Component },
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

