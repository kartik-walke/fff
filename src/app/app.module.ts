import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './CustomComponents/nav/nav.component';
import { FooterComponent } from './CustomComponents/footer/footer.component';
import { LoginComponent } from './CustomComponents/login/login.component';
import { SignupComponent } from './CustomComponents/signup/signup.component';
import { HttpClientModule } from "@angular/common/http";
import { UserlistComponent } from './CustomComponents/userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
