import { Component, OnInit } from '@angular/core';
import { WorkCard } from 'src/app/models/workCard';
import { AdvisorService } from 'src/app/services/advisor.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-work-card',
    templateUrl: './add-work-card.component.html',
    styleUrls: ['./add-work-card.component.css']
})
export class AddWorkCardComponent {
    public workCard = new WorkCard();

    constructor(private advisorService: AdvisorService, private router: Router) { }

    addWorkCard() {
        this.advisorService.addWorkCard(this.workCard)
            .subscribe(text => {
                alert(text);
                this.router.navigate(["/all-work-cards-advisor"]);
            },
                error => { alert(error); }
            );

    }


}
