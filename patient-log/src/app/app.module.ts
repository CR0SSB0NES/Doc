import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// **************** ngMaterial imports ***************************
import { MatDividerModule} from '@angular/material/divider';
// import { MatListModule} from '@angular/material/list';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
// ***************************************************************

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientsScreenComponent } from './patients-screen/patients-screen.component';
import { SideNavBarComponent, TopNavBarComponent  } from './nav-bars/nav-bars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PatientsScreenComponent,
    SideNavBarComponent,
    TopNavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    // MatListModule,
    // MatMenuModule,
    // MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
