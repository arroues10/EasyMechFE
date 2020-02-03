import { Component, OnInit } from '@angular/core';
import { WorkCard } from 'src/app/models/workCard';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';

@Component({
    selector: 'app-all-work-cards',
    templateUrl: './all-work-cards.component.html',
    styleUrls: ['./all-work-cards.component.css']
})
export class AllWorkCardsComponent implements OnInit {
    public allWorkCards: WorkCard[];

    constructor(private storeKeeperService: StoreKeeperService) { }

    ngOnInit() {
        this.storeKeeperService.getAllWorkCards()
            .subscribe(workCards => { this.allWorkCards = workCards; },
                error => { alert(error); }
                );

    }

}
