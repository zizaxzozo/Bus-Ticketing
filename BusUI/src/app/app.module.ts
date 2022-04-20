import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusComponent } from './bus/bus.component';
import { ShowBusComponent } from './bus/show-bus/show-bus.component';
import { AddEditBusComponent } from './bus/add-edit-bus/add-edit-bus.component';
import { BookingComponent } from './booking/booking.component';
import { ShowBookComponent } from './booking/show-book/show-book.component';
import { AddEditBookComponent } from './booking/add-edit-book/add-edit-book.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';;

@NgModule({
  declarations: [
    AppComponent,
    BusComponent,
    ShowBusComponent,
    AddEditBusComponent,
    BookingComponent,
    ShowBookComponent,
    AddEditBookComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
