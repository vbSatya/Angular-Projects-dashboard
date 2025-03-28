import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
// import { environment } from 'src/environments/environment'; 
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ErrorModule } from './error/error.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { AppleModule } from './apple/apple.module';
import { AndroidModule } from './android/android.module';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAlertComponent } from './ng-material/mat-alert/mat-alert.component';
import { MatConfirmComponent } from './ng-material/mat-confirm/mat-confirm.component';
import { MatInputPromptComponent } from './ng-material/mat-input-prompt/mat-input-prompt.component';


@NgModule({
  declarations: [
    AppComponent,
    MatAlertComponent,
    MatConfirmComponent,
    MatInputPromptComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    CommonModule,
    DashboardModule,
    ErrorModule,
    AboutModule,
    ContactModule,
    AndroidModule,
    AppleModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
