import { Component, OnInit } from '@angular/core';
import { WorkCard } from 'src/app/models/workCard';
import { AdvisorService } from 'src/app/services/advisor.service';

@Component({
  selector: 'app-all-work-cards-advisor',
  templateUrl: './all-work-cards-advisor.component.html',
  styleUrls: ['./all-work-cards-advisor.component.css']
})
export class AllWorkCardsAdvisorComponent implements OnInit {
    public allWorkCards: WorkCard[];

  constructor(private advisorService: AdvisorService) { }

  ngOnInit() {
    this.advisorService.getAllWorkCards()
    .subscribe(workCards => { this.allWorkCards = workCards; },
        error => { alert(error) });
  }

}
