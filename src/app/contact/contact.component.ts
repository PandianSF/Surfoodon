import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Service } from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  personalInfo = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    text: new FormControl(''),
  });
  constructor(private appservice: Service) {}
  ngOnInit() {}
  sendMail() {
    const response = this.appservice.sendMail(this.personalInfo.value);
    console.log(response);
    this.personalInfo.reset();
  }
}
