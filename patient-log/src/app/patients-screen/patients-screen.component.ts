import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-patients-screen',
  templateUrl: './patients-screen.component.html',
  styleUrls: ['./patients-screen.component.css'],
  // standalone: true,
  // imports: [MatButtonModule, MatMenuModule]
})
export class PatientsScreenComponent {

  name: any
}
