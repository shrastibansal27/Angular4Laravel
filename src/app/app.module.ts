import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { BackgroundDirective } from './background.directive';
import { LoginService } from './login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseFormComponent } from './exercises/exercise-form/exercise-form.component';
import { UpperComponentComponent } from './exercises/upper-component/upper-component.component';
import { ColorDirective } from './color.directive';
import { FirstUpperPipe } from './first-upper.pipe';
import {EvenUpperPipe} from './even-upper.pipe';
import { FilterPipe } from './filter.pipe';



const appRoutes:Routes =[
{path:'login',component:LoginFormComponent},
{path:'register',component:RegisterFormComponent},
{path : 'dashboard',component : DashboardComponent},
{path: 'exercises',component : ExercisesComponent},
{path:'exercises/create',component:ExerciseFormComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    BackgroundDirective,
    DashboardComponent,
    ExercisesComponent,
    ExerciseFormComponent,
    UpperComponentComponent,
    ColorDirective,
    FirstUpperPipe,
    EvenUpperPipe,
    FilterPipe

  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
