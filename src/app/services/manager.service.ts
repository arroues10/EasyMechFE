import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mechanic } from '../models/mechanic';
import { WorkCard } from '../models/workCard';
import { StoreKeeper } from '../models/storekeeper';
import { Advisor } from '../models/advisor';

@Injectable({
    providedIn: 'root'
})
export class ManagerService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    private url = 'https://easymechbe.herokuapp.com/api/managers/';

    constructor(private httpClient: HttpClient) { }

    private getToken() {
        return localStorage.getItem('token');
    }

    public getAllMechanics(): Observable<Mechanic[]> {
        return this.httpClient.get<Mechanic[]>(this.url + 'allMechanics/' + this.getToken());
    }

    public getWorkCardById(id: number): Observable<WorkCard> {
        return this.httpClient.get<WorkCard>(this.url + '/getWorkCardById/' + this.getToken() + '?id=' + id);
    }

    public createMechanic(mechanic: Mechanic): Observable<any> {
        return this.httpClient.post(this.url + 'createMechanic/' + this.getToken(), mechanic, { responseType: 'text' });
    }

    public createStoreKeeper(storeKeeper: StoreKeeper): Observable<any> {
        return this.httpClient.post(this.url + 'createStoreKeeper/' + this.getToken(), storeKeeper, { responseType: 'text' });
    }

    public createAdvisor(advisor: Advisor): Observable<any> {
        return this.httpClient.post(this.url + 'createAdvisor/' + this.getToken(), advisor, { responseType: 'text' });
    }
}
