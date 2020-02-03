import { Component, OnInit } from '@angular/core';
import { SignInService } from 'src/app/services/sign-in.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

    public name: string;
    public password: string;
    public loginType: string;
    public garageCode: string;
    

    constructor(private signInService: SignInService, private router: Router) { }

    public signIn(): void {
        this.signInService.onLogin(this.name, this.password, this.loginType, this.garageCode);
        localStorage.setItem('type', this.loginType);
    }

}
