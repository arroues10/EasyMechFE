import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WorkCard } from '../models/workCard';
import { Observable } from 'rxjs';
import { Part } from '../models/part';

@Injectable({
    providedIn: 'root'
})
export class StoreKeeperService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    private url = 'http://localhost:8080/api/storeKeepers/';


    constructor(private httpClient: HttpClient) { }

    private getToken() {
        return localStorage.getItem('token');
    }

    public getAllWorkCards(): Observable<WorkCard[]> {
        return this.httpClient.get<WorkCard[]>(this.url + 'allWorkCards/' + this.getToken());
    }

    public getAllWorkCardParts(id: number): Observable<Part[]> {
        return this.httpClient.get<Part[]>(this.url + 'allWorkCardParts/' + this.getToken() + '?workCardId=' + id);
    }

    public setPrices(partId: number, originalPrice: number, replacementPrice: number): Observable<any> {
        return this.httpClient.post(this.url + 'setPrices/' + this.getToken() + '?partId=' + partId + '&originalPrice=' + originalPrice + '&replacementPrice=' + replacementPrice, null);
    }

    public getPart(partId: number): Observable<Part> {
        return this.httpClient.get<Part>(this.url + 'parts/' + this.getToken() + '?id=' + partId);
    }
}
