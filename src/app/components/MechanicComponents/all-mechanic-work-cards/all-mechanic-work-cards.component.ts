import { Component, OnInit } from '@angular/core';
import { WorkCard } from 'src/app/models/workCard';
import { MechanicService } from 'src/app/services/mechanic.service';

@Component({
    selector: 'app-all-mechanic-work-cards',
    templateUrl: './all-mechanic-work-cards.component.html',
    styleUrls: ['./all-mechanic-work-cards.component.css']
})
export class AllMechanicWorkCardsComponent implements OnInit {

    public allMechanicWorkCards: WorkCard[];

    constructor(private mechanicService: MechanicService) { }

    ngOnInit() {
        this.mechanicService.getEndWorkCards()
            .subscribe(workCards => { this.allMechanicWorkCards = workCards; },
                error => { alert(error); }
            );
    }

}
