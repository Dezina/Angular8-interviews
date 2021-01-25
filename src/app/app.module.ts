import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './services/users.service';
import { WebService } from './services/web.service';
import { TestService } from './services/test.service';
import { UserpageComponent } from './userpage/userpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { SignupComponent } from './signup/signup.component';
import { AppsComponent } from './apps/apps.component';
import { WebPipe } from './pipes/web.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FilterPipe } from './filter.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';
import { TestPipe } from './pipes/test.pipe';
import { UpdateComponent } from './update/update.component';
import { AddtodoComponent } from './addtodo/addtodo.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserpageComponent,
    SignupComponent,
    AppsComponent,
    WebPipe,
    FilterPipe,
    DetailsComponent,
    TestComponent,
    TestPipe,
    UpdateComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatAutocompleteModule,
    MatInputModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
    }),
    TranslateModule.forChild()
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: createHttpLoader, // exported factory function needed for AoT compilation
    //     deps: [HttpClient]
    //   }
    // })
  ],
  providers: [UsersService, WebService, TestService],
  bootstrap: [AppComponent]
})

// export function createHttpLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18/', '.json');
// }

export class AppModule { }
