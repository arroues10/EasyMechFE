import { Component, OnInit } from '@angular/core';
import { Mechanic } from 'src/app/models/mechanic';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
    selector: 'app-create-mechanics',
    templateUrl: './create-mechanics.component.html',
    styleUrls: ['./create-mechanics.component.css']
})
export class CreateMechanicsComponent {
    public mechanic = new Mechanic();

    constructor(private managerService: ManagerService) { }

    public createMechanic() {
        this.managerService.createMechanic(this.mechanic)
            .subscribe(text => { alert(text); },
                error => { alert(error); }
            );
    }

}
