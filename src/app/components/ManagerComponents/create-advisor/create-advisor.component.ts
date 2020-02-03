import { Component, OnInit } from '@angular/core';
import { Advisor } from 'src/app/models/advisor';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-create-advisor',
  templateUrl: './create-advisor.component.html',
  styleUrls: ['./create-advisor.component.css']
})
export class CreateAdvisorComponent{

    public advisor = new Advisor();

    constructor(private managerService: ManagerService) { }

    public createAdvisor() {
        this.managerService.createAdvisor(this.advisor)
            .subscribe(text => { alert(text); },
                error => { alert(error); }
            );
    }

}
