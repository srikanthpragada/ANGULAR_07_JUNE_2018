import { Component} from '@angular/core';

@Component({
    selector: 'dbdemo',
    templateUrl: './dbdemo.component.html'
})
export class DbDemoComponent {
    
    title = "Data Binding"
    itype = "number"
    nocols = 3

    //  details is of type MouseEvent
    showMouse(details) {
        console.log(details.x + "," + details.y)
    }
}
