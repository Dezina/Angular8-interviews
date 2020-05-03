import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { CovidComponent } from './covid/covid.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './services/users.service';
import { UserpageComponent } from './userpage/userpage.component';
import { BatmanhospitalComponent } from './batmanhospital/batmanhospital.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BatmanPipe } from './pipes/batman.pipe';
import { RobinPipe } from './pipes/robin.pipe';
import { CatwomanPipe } from './pipes/catwoman.pipe';
import { SupermanPipe } from './pipes/superman.pipe';
import { RobinhospitalComponent } from './robinhospital/robinhospital.component';
import { CatwomanhospitalComponent } from './catwomanhospital/catwomanhospital.component';
import { SupermanhospitalComponent } from './supermanhospital/supermanhospital.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CovidComponent,
    LoginComponent,
    UserpageComponent,
    BatmanhospitalComponent,
    BatmanPipe,
    RobinPipe,
    CatwomanPipe,
    SupermanPipe,
    RobinhospitalComponent,
    CatwomanhospitalComponent,
    SupermanhospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
