import{Directive, HostBinding, Input} from '@angular/core'

@Directive({
    selector:'[CheckMarks]'
})

export class MarksDirective {
    @Input() marks:number = -1;

    @HostBinding('style.backgroundColor') bgColor:string='inherit';
    @HostBinding('style.color') Color:string='inherit';

    ngOnInit(){
        if(this.marks<35){
            this.bgColor = "red";
            this.Color = "white";
        }
        else if(this.marks>100 && this.marks<250){
            this.bgColor = "blue";
            this.Color = "white";
        }
        else if(this.marks>450){
            this.bgColor = "green";
            this.Color = "white";
        }

    }
}