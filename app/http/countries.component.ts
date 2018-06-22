import { Component, OnInit } from '@angular/core';
import { Country } from './Country';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'st-countries',
    templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {
    countries : Country[];
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
         this.http.get<Country[]>("https://restcountries.eu/rest/v2/all")
                .subscribe( resp => this.countries = resp)
    }

}