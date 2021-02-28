import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './donate/education/education.component';
import { HealthComponent } from './donate/health/health.component';
import { NgoComponent } from './donate/ngo/ngo.component';
import { OthersComponent } from './donate/others/others.component';
import { HomeComponent } from './home/home.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'howitworks', component:HowitworksComponent},
  {path:'login', component:LoginComponent},
  {path:'ngo', component:NgoComponent},
  {path:'education', component:EducationComponent},
  {path:'others', component:OthersComponent},
  {path:'health', component:HealthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
