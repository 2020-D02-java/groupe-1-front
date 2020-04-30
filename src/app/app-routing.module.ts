import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthComponent } from './auth/auth.component';
import { JulDupComponent } from './jul-dup/jul-dup.component';
import { AntoineRComponent } from './antoine-r/antoine-r.component';


const routes: Routes =  [
   // /tech accessible uniquement si connecté
  { path: 'antoine', component: AntoineRComponent},
  { path: 'julDup', component: JulDupComponent },
  { path: '', redirectTo: '/tech', pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
