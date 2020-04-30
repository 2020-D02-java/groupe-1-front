import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthComponent} from './auth/auth.component';
import {RouterModule, Routes} from '@angular/router';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AntoineRComponent } from './antoine-r/antoine-r.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AntoineRComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
