import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from '../models/part';
import { WorkCard } from '../models/workCard';

@Injectable({
    providedIn: 'root'
})
export class MechanicService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json' 
    });

    private url = 'https://easymechbe.herokuapp.com/api/mechanics/';

    constructor(private httpClient: HttpClient) { }

    private getToken() {
        return localStorage.getItem('token');
    }

    public setWorkCard(plateNumber: string): Observable<any> {
        return this.httpClient.post(this.url + 'setWorkCard/' + this.getToken() + '?plateNumber=' + plateNumber, null, { responseType: 'json' });
    }

    public addParts(parts: Part[]): Observable<any> {
        return this.httpClient.post(this.url + 'parts/' + this.getToken(), parts, { responseType: 'text' });
    }

    public setEndWork(): Observable<any> {
        return this.httpClient.post(this.url + 'setEndWork/' + this.getToken(), null, { responseType: 'text' });
    }

    public addToEndWorkCards(): Observable<any> {
        return this.httpClient.post(this.url + 'addToEndWorkCards/' + this.getToken(), null, { responseType: 'text' });
    }

    public getEndWorkCards(): Observable<WorkCard[]> {
        return this.httpClient.get<WorkCard[]>(this.url + 'getEndWorkCards/' + this.getToken());
    }
}
