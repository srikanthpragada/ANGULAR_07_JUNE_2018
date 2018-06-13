import { Component} from '@angular/core';

@Component({
    selector: 'sd-demo',
    templateUrl: './structdir.component.html'
})
export class StructDirComponent  {
    langs = ['JavaScript','TypeScript','Python','Java','C#']
    getHours() {
        var d = new Date()
        console.log(d.getHours() )
        return d.getHours()
    }

}
