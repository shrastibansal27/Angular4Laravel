import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import {StructuralDirective} from './structural.directive';
import {SubscribersModule} from './subscribers/subscribers.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ExerciseService } from './exercise.service';
import { HomeComponent } from './home/home.component';





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
    FilterPipe,
    StructuralDirective,
    PageNotFoundComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,AppRoutingModule,ReactiveFormsModule
  ],
  providers: [LoginService,AuthGuard,AuthService,ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
