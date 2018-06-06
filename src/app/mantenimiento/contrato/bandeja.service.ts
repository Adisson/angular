import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { ConfigService } from "../../../config/config.service";
//import {Observable} from 'rxjs/observable';

import "rxjs/add/operator/map";

@Injectable()
export class ExpedientCourierService {
    private url: string;

    constructor(
        private http: Http,
        private config: ConfigService
    ) {
        this.url = `${config.getApiURI()}std/ExpedientCourier`;
    }
/*
    save(data: any): Observable<any> {
        return this.http
            .put(`${this.url}`, data, this.config.getHeaders("json"))
            .map(this.config.jsonExtractData)
            .catch(this.config.handleError);
    }

    get (expedient_id: string): Observable<any> {
        return this.http
              .get(`${this.url}?expedient_id=` + expedient_id, this.config.getHeaders("json"))
              .map(this.config.jsonExtractData)
              .catch(this.config.handleError);
    }*/

}
