import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  personalDetails = {
    hobby: '',
    occupation: '',
    placesVisited: '',
    favoriteArtist: '',
    favoriteMusician: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Save personal details logic
    // Submit the form data to the server or perform other actions
    alert('Form submitted successfully!');
  }
}
