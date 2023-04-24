import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from '../services/trips.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

    editform: FormGroup;
    submitted = false;

    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private tripsService: TripsService,
      private activatedRoute: ActivatedRoute
     ) {
      this.editform = this.formBuilder.group({
        _id: [''],
        __v: [''],
        code: ['', Validators.required],
        name: ['', Validators.required],
        length: ['', Validators.required],
        start: ['', Validators.required],
        resort: ['', Validators.required],
        perPerson: ['', Validators.required],
        image: ['', Validators.required],
        description: ['', Validators.required]
      });
    }

    ngOnInit(): void {
        this.tripsService.getTrip(this.activatedRoute.snapshot.params['tripCode']).subscribe ({
        next: trip => this.editform.setValue(trip),
        error: e => console.log(e)
      });
    }

    updateTrip() {
      this.submitted = true;
      if(this.editform.valid) {
        this.tripsService.updateTrip(this.activatedRoute.snapshot.params['tripCode'], this.editform.value)
            .subscribe({
                next: () => this.router.navigate(['/']),
                error: e => console.log(e)
            });
      }
    }

get f() { return this.editform.controls; }

}
