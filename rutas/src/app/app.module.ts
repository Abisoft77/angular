import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AutosComponent } from './components/autos/autos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { Page404Component } from './components/page404/page404.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutosComponent,
    CarritoComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
