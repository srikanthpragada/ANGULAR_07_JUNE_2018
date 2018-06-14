import { Component, Input } from '@angular/core';

@Component({
    selector: 'st-second',
    template: 'Title : {{title}} Price :  {{price}}'
})
export class SecondComponent  {
    title = "Second Component"
    @Input() price : number = 1000;
}
