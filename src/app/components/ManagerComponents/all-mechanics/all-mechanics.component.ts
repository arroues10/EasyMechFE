import { Component, OnInit } from '@angular/core';
import { Mechanic } from 'src/app/models/mechanic';
import { ManagerService } from 'src/app/services/manager.service';
import { WorkCard } from 'src/app/models/workCard';

@Component({
    selector: 'app-all-mechanics',
    templateUrl: './all-mechanics.component.html',
    styleUrls: ['./all-mechanics.component.css']
})
export class AllMechanicsComponent implements OnInit {

    public allMechanics: Mechanic[];
    public workCard = new WorkCard();

    constructor(private managerService: ManagerService) { }

    ngOnInit() {
        this.managerService.getAllMechanics()
            .subscribe(mechanics => { this.allMechanics = mechanics; },
                error => { alert(error) });
    }

    getWorkcardById(workCardId) {
        this.managerService.getWorkCardById(workCardId)
            .subscribe(workCard => { this.workCard = workCard; },
                error => { alert(error); });
    }

}
