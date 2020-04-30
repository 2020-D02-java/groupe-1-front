import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthComponent } from './auth/auth.component';
import { JulDupComponent } from './jul-dup/jul-dup.component';


const routes: Routes = [

  { path: 'julDup', component: JulDupComponent },
  { path: '', redirectTo: '/tech', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
