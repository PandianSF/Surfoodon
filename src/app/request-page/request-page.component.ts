import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Service } from '../app.service';
@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.scss'],
})
export class RequestPageComponent implements OnInit {
  formInfoGroup!: FormGroup;
  individual: boolean = false;
  organization: boolean = false;
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
      DeliveryDetails: this.fb.group({
        deliveryDate: [''],
        deliveryTime: [''],
      }),
      organizationInfo: this.fb.group({
        organizationType: [''],
        totalMembers: [''],
        description: [''],
      }),
    });
  }

  getVal(event: any) {
    console.log(event.target.value);
    if (event.target.value === 'individual') {
      this.individual = true;
      this.organization = false;
    }
    if (event.target.value === 'organizations') {
      this.organization = true;
      this.individual = false;
    }
  }

  get foodDetails() {
    return this.formInfoGroup.get('foodDetails') as FormArray;
  }
  addFoodItem() {
    this.foodDetails.push(this.foodDetailsForm);
  }
  foodDetailsForm = this.fb.group({
    foodType: new FormControl('', [Validators.required]),
    foodItem: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    dietary: new FormControl('', [Validators.required]),
    additionalDetails: new FormControl('', [Validators.required]),
  });
  removeFoodItem(index: number) {
    this.foodDetails.removeAt(index);
  }
}
