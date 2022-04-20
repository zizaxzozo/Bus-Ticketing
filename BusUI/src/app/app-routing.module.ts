import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusComponent } from './bus/bus.component';
import { BookingComponent } from './booking/booking.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'buses', component: BusComponent},
  {path: 'bookings', component: BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
