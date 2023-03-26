import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AllMessagesComponent } from './views/all-messages/all-messages.component';
import { MyMessagesComponent } from './views/my-messages/my-messages.component';
import { CreateMessagesComponent } from './views/create-messages/create-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FiltersComponent,
    MessagesComponent,
    AllMessagesComponent,
    MyMessagesComponent,
    CreateMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxParallaxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
