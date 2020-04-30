import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';
import { SebComponentComponent } from './seb-component/seb-component.component';
import { AntoineRComponent } from './antoine-r/antoine-r.component';
import { BouComponent } from './bou/bou.component';


const routes: Routes =  [
   // /tech accessible uniquement si connecté
  { path: 'antoine', component: AntoineRComponent},
  { path: 'boukhemis', component: BouComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/tech', pathMatch: 'full'},
  {path: 'seb', component: SebComponentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
