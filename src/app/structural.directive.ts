import {Directive,TemplateRef,Input,ViewContainerRef} from '@angular/core';


@Directive({
    selector:'[appUnless]'
})

export class StructuralDirective{

    private hasView = false;

    constructor(private templateRef:TemplateRef<any>,
        private viewContainer:ViewContainerRef){}


    @Input() set appUnless(condition:boolean){    // need to check property name should be same as selector name
        if (!condition && !this.hasView) {
              this.viewContainer.createEmbeddedView(this.templateRef);
              this.hasView = true;
        } else if (condition && this.hasView) {
              this.viewContainer.clear();
              this.hasView = false;
        }

    }
}