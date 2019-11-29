import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{ path: '', redirectTo: 'app/login', pathMatch: 'full' },
{ path: 'app/login', component: LoginComponent },
{ path: 'app/home', component: HomeComponent },
{ path: 'app/users', component: UserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
