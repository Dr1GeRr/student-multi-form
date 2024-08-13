import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  contactDetails = {
    phoneNumber: '',
    email: '',
    homeAddress1: '',
    homeAddress2: '',
    city: '',
    state: '',
    country: '',
    zipcode: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Save contact details logic
    this.router.navigate(['/personal-details']);
  }
}
