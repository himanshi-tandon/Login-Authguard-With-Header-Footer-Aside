import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    'path': 'login', component: LoginComponent
  },
  {
    'path': 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    'path': '**', component: LoginComponent
  },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
