import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { OperatorComponent } from './operator/operator.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [{ path: '', redirectTo: 'app/login', pathMatch: 'full' },
{ path: 'app/login', component: LoginComponent },
{ path: 'app/home', component: HomeComponent },
{ path: 'app/users', component: UserComponent },
{ path: 'app/create-ticket', component: CreateTicketComponent },
{ path: 'app/create-user', component: CreateUserComponent },
{ path: 'app/operator', component: OperatorComponent },
{ path: 'app/statistics', component: StatisticsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
