import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from "angular2-image-upload";
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { BedComponent } from './components/bed/bed.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { LivingComponent } from './components/living/living.component';
import { OutdoorComponent } from './components/outdoor/outdoor.component';
import { DecorComponent } from './components/decor/decor.component';
import { LightingComponent } from './components/lighting/lighting.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'bed', component: BedComponent},
  {path:'kitchen', component: KitchenComponent},
  {path:'living', component: LivingComponent},
  {path:'outdoor', component: OutdoorComponent},
  {path:'decor', component: DecorComponent},
  {path:'lighting', component: LightingComponent},
  {path:'favorites', component: FavoritesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    RegisterComponent,
    BedComponent,
    KitchenComponent,
    LivingComponent,
    OutdoorComponent,
    DecorComponent,
    LightingComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ImageUploadModule.forRoot(),
    CommonModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
