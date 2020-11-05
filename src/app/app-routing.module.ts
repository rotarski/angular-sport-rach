import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomComponent } from './main/welcom/welcom.component';
import { EditProfilComponent } from './parts/klub/edit-profil/edit-profil.component';
import { ProfilComponent } from './parts/klub/profil/profil.component';

const routes: Routes = [
  { path:'', component: WelcomComponent},
  { path: 'klub', component:ProfilComponent,
    children:[
      { path: 'edit', component: EditProfilComponent}
    ]},
  {path:'**', component: WelcomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
