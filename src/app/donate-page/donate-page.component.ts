import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Service } from '../app.service';

@Component({
  selector: 'app-donate-page',
  templateUrl: './donate-page.component.html',
  styleUrls: ['./donate-page.component.scss'],
})
export class DonatePageComponent implements OnInit {
  formInfoGroup!: FormGroup;
  constructor(private fb: FormBuilder, private appservice: Service) {}
  ngOnInit(): void {
    this.formInfoGroup = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      foodDetails: this.fb.array([]),

      location: this.fb.group({
        address: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
      }),
      pickupDetails: this.fb.group({
        pickupDate: [''],
        additionalDetails: ['', [Validators.required]],
      }),
    });
  }
  get foodDetails() {
    return this.formInfoGroup.get('foodDetails') as FormArray;
  }
  addFoodItem() {
    this.foodDetails.push(this.foodDetailsForm);
  }
  removeFoodItem(index: number) {
    this.foodDetails.removeAt(index);
  }
  foodDetailsForm = this.fb.group({
    foodType: new FormControl('', [Validators.required]),
    foodItem: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });
  submit() {}
}
