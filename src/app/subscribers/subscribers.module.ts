import {NgModule} from '@angular/core';
import { SubscribersListComponent } from './subscribers-list/subscribers-list.component';
import { SubscribersRoutingModule } from './subscribers-routing.module';
import {CommonModule} from '@angular/common';
import { SubscribersFormComponent } from './subscribers-form/subscribers-form.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

@NgModule({
    declarations: [SubscribersListComponent, SubscribersFormComponent, SubscribersComponent],
    imports: [CommonModule,SubscribersRoutingModule],
    providers:[],
    //bootstrap:[SubscribersListComponent],
    //exports:[SubscribersListComponent]

})
export class SubscribersModule{


}