import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkCard } from '../models/workCard';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Part } from '../models/part';

@Injectable({
    providedIn: 'root'
})
export class AdvisorService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    private url = 'https://easymechbe.herokuapp.com/api/advisors/';

    constructor(private httpClient: HttpClient) { }

    private getToken() {
        return localStorage.getItem('token');
    }

    public getAllWorkCards(): Observable<WorkCard[]> {
        return this.httpClient.get<WorkCard[]>(this.url + 'allWorkCards/' + this.getToken());
    }

    public getAllWorkCardParts(workCardId: number): Observable<Part[]> {
        return this.httpClient.get<Part[]>(this.url + 'allWorkCardParts/' + this.getToken() + '?workCardId=' + workCardId);
    }

    public addWorkCard(workCard: WorkCard): Observable<any> {
        return this.httpClient.post(this.url + 'addWorkCard/' + this.getToken(), workCard, { responseType: 'text' });
    }
}
