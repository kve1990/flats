import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApartmentsService {
    baseUrl: string;

    constructor(private http: Http, ) {
        //this.baseUrl = 'app/services/apartments.json';
        this.baseUrl = 'http://a0116545.xsph.ru/api/';
    }

    getList(){
        return this.http.get(this.baseUrl + 'apartments')
            .map(res => res.json());
    }

    getItem(id){
        return this.http.get(this.baseUrl + 'building/' + id)
            .map(res => res.json());
    }

    getFlats(id){
        return this.http.get(this.baseUrl + 'flats/' + id)
            .map(res => res.json());
    }

    getFlat(id){
        return this.http.get(this.baseUrl + 'flat/' + id)
            .map(res => res.json());
    }
}