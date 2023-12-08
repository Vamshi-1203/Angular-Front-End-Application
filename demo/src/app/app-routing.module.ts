import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { SignupComponent } from './signup/signup.component';
import { TomatoComponent } from './tomato/tomato.component';
import { PotatoComponent } from './potato/potato.component';
import { OnionComponent } from './onion/onion.component';
import { LemonComponent } from './lemon/lemon.component';
import { OkraComponent } from './okra/okra.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vegetable', component: VegetableComponent},
  {path:'signup',component:SignupComponent},
  {path:'tomato',component:TomatoComponent},
  {path:'potato',component:PotatoComponent},
  {path:'onion',component:OnionComponent},
  {path:'lemon',component:LemonComponent},
  {path:'okra',component:OkraComponent},
  {path: '**', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
