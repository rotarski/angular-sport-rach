import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomComponent } from './main/welcom/welcom.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { ProfilComponent } from './parts/klub/profil/profil.component';
import { EditProfilComponent } from './parts/klub/edit-profil/edit-profil.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent,
    HeaderComponent,
    FooterComponent,
    ProfilComponent,
    EditProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
