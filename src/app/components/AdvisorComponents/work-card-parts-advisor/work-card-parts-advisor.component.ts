import { Component, OnInit } from '@angular/core';
import { Part } from 'src/app/models/part';
import { ActivatedRoute } from '@angular/router';
import { AdvisorService } from 'src/app/services/advisor.service';

@Component({
    selector: 'app-work-card-parts-advisor',
    templateUrl: './work-card-parts-advisor.component.html',
    styleUrls: ['./work-card-parts-advisor.component.css']
})
export class WorkCardPartsAdvisorComponent implements OnInit {

    public parts: Part[];
    public workCardId: number;

    constructor(private activatedRoute: ActivatedRoute, private advisorService: AdvisorService) { }

    ngOnInit() {
        this.workCardId = +this.activatedRoute.snapshot.params.workCardId;
        this.advisorService.getAllWorkCardParts(this.workCardId)
            .subscribe(parts => { this.parts = parts; },
                error => { error; });
    }

}
