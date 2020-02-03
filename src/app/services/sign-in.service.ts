import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SignInService {

    public token: string;
    public isLogin = new EventEmitter<boolean>();
    public isManager = new EventEmitter<boolean>();
    public isStoreKeeper = new EventEmitter<boolean>();
    public isMechanic = new EventEmitter<boolean>();
    public isAdvisor = new EventEmitter<boolean>();

    constructor(private httpClient: HttpClient, private router: Router) { }

    public getLogin(name: string, password: string, loginType: string, garageCode: string): Observable<any> {
        return this.httpClient.post('http://localhost:8080/api/login?name='
            + name + '&password=' + password + '&loginType=' + loginType.toUpperCase() + '&garageCode=' + garageCode, null, { responseType: 'text' });
    }

    public onLogin(name: string, password: string, loginType: string, garageCode: string) {
        return this.getLogin(name, password, loginType, garageCode).subscribe(token => {

            this.token = token;
            this.isLogin.emit(true);
            localStorage.setItem('token', token);
            alert("welcome " + name);

            switch (loginType) {
                case 'MANAGER':
                    this.isManager.emit(true);
                    return this.router.navigate(['/all-mechanics']);
                case 'STOREKEEPER':
                    this.isStoreKeeper.emit(true);
                    return this.router.navigate(['/all-work-cards']);
                case 'ADVISOR':
                    this.isAdvisor.emit(true);
                    return this.router.navigate(['/all-work-cards-advisor']);
                default:
                    this.isMechanic.emit(true);
                    return this.router.navigate(['/mechanic-page']);
            }
        },
            error => { alert('Something wrong try again' + error); }


        );
    }

    public logout() {
        localStorage.removeItem('token');
        window.location.reload();
    }
}
