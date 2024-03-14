import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserlistingComponent } from './userlisting/userlisting.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'CreateUser' ,component:CreateuserComponent},
  {path:'UserList',component:UserlistingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  RouterOutlet]
})
export class AppRoutingModule { }
