import {RouterModule,Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseFormComponent } from './exercises/exercise-form/exercise-form.component';
import {SubscribersModule} from './subscribers/subscribers.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';


const appRoutes:Routes =[
    {path:'',component:HomeComponent},
    {path:'login',component:LoginFormComponent},
    {path:'register',component:RegisterFormComponent},
    {path :'dashboard',component : DashboardComponent},
    {path:'exercises/create',component:ExerciseFormComponent},
    {path: 'exercises',component : ExercisesComponent, canActivate:[AuthGuard],children:[

        {path:'edit/:id',component:ExercisesComponent},
        {path:'delete',component:ExercisesComponent}

    ]},
    {path:'subscribers',loadChildren:'./subscribers/subscribers.module#SubscribersModule'},

    {path:"not-found",component:PageNotFoundComponent},
    //{path:"**",redirectTo:'/not-found'}

]

@NgModule({

    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})


export class AppRoutingModule{

}
