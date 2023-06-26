import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

showPatients:boolean = false;

constructor(private router: Router) {}

patientsBtn() {
  this.showPatients = !this.showPatients;
}

addPatient() {
  this.router.navigate(['patients'])
}

viewPatient() {
  
}


}
