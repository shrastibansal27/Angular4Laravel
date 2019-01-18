import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'evenupper',
    pure: false
})

export class EvenUpperPipe implements PipeTransform {

    output:string = '';

    transform(value:any,pos:any){
        console.log("changed pipe");

        for (var i = 0 ; i <= value.length-1; i++) {
            if(i %2 ==0 && i == pos){
               this.output+= value[i].toUpperCase();
            }else{
                this.output+= value[i];
            }
        }

        return this.output;
    }

}