import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Part } from 'src/app/models/part';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';

@Component({
    selector: 'app-work-card-parts',
    templateUrl: './work-card-parts.component.html',
    styleUrls: ['./work-card-parts.component.css']
})
export class WorkCardPartsComponent implements OnInit {
    public parts: Part[];
    public workCardId: number;

    constructor(private activatedRoute: ActivatedRoute, private storeKeeperService: StoreKeeperService) { }

    ngOnInit() {
        this.workCardId = +this.activatedRoute.snapshot.params.workCardId;
        this.storeKeeperService.getAllWorkCardParts(this.workCardId)
            .subscribe(parts => { this.parts = parts; },
                error => { error; });
    }

}
