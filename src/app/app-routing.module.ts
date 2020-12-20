import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: 'perfil', component: PerfilComponent},
  { path: 'portafolio/:id', component: PortafolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
