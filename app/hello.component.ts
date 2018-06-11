import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
   title = "Angular 6"

   change() {
       this.title = this.title.toUpperCase();
   }
}
