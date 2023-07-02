import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { PatientsScreenComponent } from './patients-screen/patients-screen.component';
import { SideNavBarComponent, TopNavBarComponent  } from './nav-bars/nav-bars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PatientsScreenComponent,
    SideNavBarComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
