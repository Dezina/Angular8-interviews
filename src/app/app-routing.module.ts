import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { SignupComponent } from './signup/signup.component';
import { AppsComponent } from './apps/apps.component';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';
import { UpdateComponent } from './update/update.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'userpage',
    component: UserpageComponent
  },
  {
    path: 'apps',
    component: AppsComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'todo',
    component: TestComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'addtodo',
    component: AddtodoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
