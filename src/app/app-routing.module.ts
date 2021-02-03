import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { LoginComponent } from './parts/user/authentication/login/login.component';
import { EditProfilComponent } from './parts/klub/edit-profil/edit-profil.component';
import { KlubComponent } from './parts/klub/klub/klub.component';
import { ProfilComponent } from './parts/klub/profil/profil.component';
import { UserComponent } from './parts/user/user/user.component';
import { RegisterComponent } from './parts/user/authentication/register/register.component';
import { AdminComponent } from './parts/user/admin/admin/admin.component';
import { KosztyComponent } from './parts/rachunki/koszty/koszty/koszty.component';
import { AuthGuardService } from './parts/user/authentication/service/auth-guard.service';
import { FormKosztyComponent } from './parts/rachunki/koszty/form-koszty/form-koszty.component';
import { ListKosztyComponent } from './parts/rachunki/koszty/list-koszty/list-koszty.component';
import { FormPodmiotComponent } from './parts/rachunki/podmiot/form-podmiot/form-podmiot.component';
import { PrzychodyComponent } from './parts/rachunki/przychody/przychody/przychody.component';
import { ListPrzychodyComponent } from './parts/rachunki/przychody/list-przychody/list-przychody.component';
import { FormPrzychodyComponent } from './parts/rachunki/przychody/form-przychody/form-przychody.component';

const routes: Routes = [
  { path:'', component: WelcomeComponent},
  { path:'admin', component: AdminComponent},
  {path: 'user', component:UserComponent, canActivateChild:[AuthGuardService],
    children:[
      { path: 'klub', component:KlubComponent,
        children:[
          { path: 'edit', component: EditProfilComponent},
          { path: 'profil', component: ProfilComponent},
          { path: 'koszty', component: KosztyComponent, 
          children:[
             { path: 'form', component: FormKosztyComponent},
             { path: 'list', component: ListKosztyComponent},
             { path: 'podmiot', component: FormPodmiotComponent}
          ]},
          { path: 'przychody', component: PrzychodyComponent, 
          children:[
             { path: 'form', component: FormPrzychodyComponent},
             { path: 'list', component: ListPrzychodyComponent},
             { path: 'podmiot', component: FormPodmiotComponent}
          ]}
        ]
      }
    ]
  },
  {path: 'user', component:UserComponent,
    children:[
      {path: 'register', component:RegisterComponent},
      {path: 'login', component:LoginComponent},
    ]
  },
  {path:'**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
