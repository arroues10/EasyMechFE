import { Component, OnInit } from '@angular/core';
import { StoreKeeper } from 'src/app/models/storekeeper';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-create-store-keeper',
  templateUrl: './create-store-keeper.component.html',
  styleUrls: ['./create-store-keeper.component.css']
})
export class CreateStoreKeeperComponent{

    public storeKeeper = new StoreKeeper();

    constructor(private managerService: ManagerService) { }

    public createStoreKeeper() {
        this.managerService.createStoreKeeper(this.storeKeeper)
            .subscribe(text => { alert(text); },
                error => { alert(error); }
            );
    }

}
