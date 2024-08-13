import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any = {
    contactDetails: {},
    personalDetails: {}
  };

  private serviceUrl = 'https://your-service-url.com/submit';

  constructor(private http: HttpClient) { }

  setContactDetails(details: any) {
    this.formData.contactDetails = details;
  }

  setPersonalDetails(details: any) {
    this.formData.personalDetails = details;
  }

  submitForm(): Observable<any> {
    return this.http.post(this.serviceUrl, this.formData);
  }
}
