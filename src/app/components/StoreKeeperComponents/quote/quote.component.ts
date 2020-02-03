import { Component, OnInit } from '@angular/core';
import { StoreKeeperService } from 'src/app/services/store-keeper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Part } from 'src/app/models/part';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    public part = new Part();
    public workCardId: number;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private storeKeeperService: StoreKeeperService) { }

    ngOnInit() {
        this.part.id = +this.activatedRoute.snapshot.params.partId;
        this.workCardId = +this.activatedRoute.snapshot.params.workCardId;
        this.storeKeeperService.getPart(this.part.id).subscribe(
            p => { this.part = p; },
            error => { console.log(error); }
        );
    }

    public setPrices(): void {
        this.storeKeeperService.setPrices(this.part.id, this.part.originalPrice, this.part.replacementPrice)
            .subscribe(p => {
                alert(p.name);
                this.router.navigate(["/work-card-parts/" + this.workCardId]);
            },
                error => { alert(error); });
    }
}
