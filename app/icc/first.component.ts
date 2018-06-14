import { Component} from '@angular/core';

@Component({
    selector: 'st-first',
    template: `<h1>{{title}}</h1>
    <st-second [price]='10000'></st-second>
    <p></p>
    <st-second [price]='500'></st-second>
    `
})
export class FirstComponent  {
    title = "First Component"
}
