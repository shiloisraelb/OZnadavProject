import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireStorageModule } from "@angular/fire/compat/storage";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdCustomerdCustomerComponent } from './components/ad-customerd-customer/ad-customerd-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { SityTableComponent } from './components/sity-table/sity-table.component';
import {MatTableModule} from '@angular/material/table';
import { GrooTableComponent } from './components/groo-table/groo-table.component';
import { UpdateCustComponent } from './components/update-cust/update-cust.component';
@NgModule({
  declarations: [
    
    AdCustomerdCustomerComponent,
    AppComponent,
    SityTableComponent,
    GrooTableComponent,
    UpdateCustComponent,
    
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,),
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  exports: [
    
    MatFormFieldModule,
    MatInputModule,
    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
