import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private url = 'http://localhost:3000';
  personalInfo: any;

  constructor(private http: HttpClient) {}
  sendMail(body: any) {
    console.log(body);
    const response = this.http.post(this.url + '/mail', {
      ...body,
    });
    console.log(response.subscribe((v) => v));
    return response;
  }
}
