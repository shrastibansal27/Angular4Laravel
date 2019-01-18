import {RouterModule,Routes} from '@angular/router';
import {SubscribersComponent} from './subscribers/subscribers.component';
import {NgModule} from '@angular/core';


const routes:Routes = [{path:'',component:SubscribersComponent}];

@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]

})


export class SubscribersRoutingModule{

}