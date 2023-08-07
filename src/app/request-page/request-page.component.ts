import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.scss'],
})
export class RequestPageComponent implements OnInit {
  personalInfo!: FormGroup;
  individual: boolean = false;
  organization: boolean = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.personalInfo = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),

      foodDetails: this.fb.group({
        foodType: [''],
        foodItem: [''],
        quantity: [''],
        dietary: [''],
        additionalDetails: [''],
      }),
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
}
