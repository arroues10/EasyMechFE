import { Component, OnInit } from '@angular/core';
import { MechanicService } from 'src/app/services/mechanic.service';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    selector: 'app-mechanic-page',
    templateUrl: './mechanic-page.component.html',
    styleUrls: ['./mechanic-page.component.css']
})
export class MechanicPageComponent implements OnInit {
    public plateNumber: string;

    constructor(private mechanicService: MechanicService, private router: Router) { }

    ngOnInit() {
    }

    public setWorkCard(): void {
        this.mechanicService.setWorkCard(this.plateNumber)
            .subscribe(text => {
                alert(text);
                this.router.navigate(['/add-parts']);
            },
                error => { alert(error.error.message); }
            );
    }

}
