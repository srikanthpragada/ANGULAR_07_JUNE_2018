import { Component, OnInit , Optional } from '@angular/core';
import { ConvertService} from './convert.service'

@Component({
    selector: 'st-convert',
    templateUrl: './convert.component.html',
    providers : [ConvertService]
})
export class ConvertComponent implements OnInit {
    result : number = 0;
    // Depedency Injection 
    constructor(@Optional() private converter : ConvertService) { 
        console.log("Constructor")
    }

    ngOnInit() {
        console.log("onInit()")
        console.log( this.converter.INRTOUSD)
        console.log( this.converter.INRTOEUR)
    }
  

    convertToUsd(amount : number) {
        // call method in service to convert 
        this.result =  this.converter.inrToUsd(amount)
    }

    convertToEuro(amount : number) {
        // call method in service to convert 
        this.result =  this.converter.inrToEur(amount)
    }
}
