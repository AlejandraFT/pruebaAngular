import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { MyMessagesComponent } from './views/my-messages/my-messages.component';
import { AllMessagesComponent } from './views/all-messages/all-messages.component';
import { CreateMessagesComponent } from './views/create-messages/create-messages.component';

const routes: Routes = [
    {
        path: '',
        component : HomeComponent
    },
    {
        path: 'login',
        component : LoginComponent
    },
    {
        path: 'register',
        component : RegisterComponent
    },
    {
        path: 'myMessages',
        component : MyMessagesComponent
    },
    {
        path: 'allMessages',
        component : AllMessagesComponent
    },
    {
        path: 'createMessages',
        component : CreateMessagesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
