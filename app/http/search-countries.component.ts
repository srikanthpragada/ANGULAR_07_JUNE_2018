import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'st-countries',
    templateUrl: './search-countries.component.html'
})
export class SearchCountriesComponent   {
    countries : Country[];
    message : string = ""
    constructor(private http: HttpClient) {
        this.countries = [] 
    }

    search(name)
    { 
         this.message = ""
         this.http.get<Country[]>("https://restcountries.eu/rest/v2/name/" + name)
                .subscribe( 
                    resp => this.countries = resp,
                    ex => { 
                           this.countries = [];
                           this.message = "Sorry! No country found!";
                    }
                 )
    }

}