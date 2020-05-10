import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Part } from 'src/app/models/part';
import { MechanicService } from 'src/app/services/mechanic.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-parts',
    templateUrl: './add-parts.component.html',
    styleUrls: ['./add-parts.component.css']
})
export class AddPartsComponent implements OnInit {
    addPartsForm: FormGroup;
    parts: Part[];

    constructor(private formBuilder: FormBuilder, private mechanicService: MechanicService, private router: Router) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.addPartsForm = this.formBuilder.group({
            newParts: this.formBuilder.array([])
        });
    }

    onSubmitForm() {
        const formValue = this.addPartsForm.value;
        this.parts = formValue['newParts'] ? formValue['newParts'] : [];
        this.mechanicService.addParts(this.parts)
            .subscribe(parts => { alert('parts added' + parts); },
                error => { alert('error'); });
    }

    getParts() {
        return this.addPartsForm.get('newParts') as FormArray;
    }

    onAddPart() {
        const newPartControl = this.formBuilder.control('', Validators.required);
        this.getParts().push(newPartControl);
    }

    setEndWork() {
        this.mechanicService.setEndWork()
            .subscribe(text => {
                alert(text);
            },
                error => { alert(error.error.message); }
            );
        // this.mechanicService.addToEndWorkCards()
        //     .subscribe(text => {
        //         alert(text);
        //         this.router.navigate(['/mechanic-page']);
        //     },
        //         error => { alert(error.error.message); }
        //     );
    }

}
