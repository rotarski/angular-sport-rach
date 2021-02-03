import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { ProfilComponent } from './parts/klub/profil/profil.component';
import { EditProfilComponent } from './parts/klub/edit-profil/edit-profil.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { KlubComponent } from './parts/klub/klub/klub.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './parts/user/user/user.component';
import { LoginComponent } from './parts/user/authentication/login/login.component';
import { RegisterComponent } from './parts/user/authentication/register/register.component';
import { AuthIntereceptorService } from './parts/user/authentication/http/auth-intereceptor.service';
import { MainContainerComponent } from './main/welcome/main-container/main-container.component';
import { ItemContainerComponent } from './main/welcome/item-container/item-container.component';
import { TruncatePipe } from './utils/truncate.pipe';
import { AdminComponent } from './parts/user/admin/admin/admin.component';
import { SanitazeHtmlPipe } from './utils/sanitaze-html.pipe';
import { PrzychodyComponent } from './parts/rachunki/przychody/przychody/przychody.component';
import { KosztyComponent } from './parts/rachunki/koszty/koszty/koszty.component';
import { FormKosztyComponent } from './parts/rachunki/koszty/form-koszty/form-koszty.component';
import { KodPipe } from './utils/kod.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListKosztyComponent } from './parts/rachunki/koszty/list-koszty/list-koszty.component';
import { FormPodmiotComponent } from './parts/rachunki/podmiot/form-podmiot/form-podmiot.component';
import { LoadingComponent } from './utils/loading/loading/loading.component';
import { ConfirmationDialogComponent } from './utils/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { ListPrzychodyComponent } from './parts/rachunki/przychody/list-przychody/list-przychody.component';
import { FormPrzychodyComponent } from './parts/rachunki/przychody/form-przychody/form-przychody.component';
import { EditKlubComponent } from './parts/klub/edit-profil/edit-klub/edit-klub.component';
import { EditRejestracjaComponent } from './parts/klub/edit-profil/edit-rejestracja/edit-rejestracja.component';
import { EditOrganComponent } from './parts/klub/edit-profil/edit-organ/edit-organ.component';
import { EditCzlonekComponent } from './parts/klub/edit-profil/edit-czlonek/edit-czlonek.component';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfilComponent,
    EditProfilComponent,
    KlubComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    MainContainerComponent,
    ItemContainerComponent,
    TruncatePipe,
    AdminComponent,
    SanitazeHtmlPipe,
    PrzychodyComponent,
    KosztyComponent,
    FormKosztyComponent,
    KodPipe,
    ListKosztyComponent,
    FormPodmiotComponent,
    LoadingComponent,
    ConfirmationDialogComponent,
    ListPrzychodyComponent,
    FormPrzychodyComponent,
    EditKlubComponent,
    EditRejestracjaComponent,
    EditOrganComponent,
    EditCzlonekComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: AuthIntereceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
