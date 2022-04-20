import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:7107/api";

  constructor(private http: HttpClient) { }

  /** Methods to consume API for Bus */
  getBusList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Buses');
  }

  addBus(val: any){
    return this.http.post(this.APIUrl + '/Buses', val)
  }

  updateBus(val: any){
    return this.http.put(this.APIUrl + '/Buses', val)
  }

  deleteBus(val: any){
    return this.http.delete(this.APIUrl + '/Buses/' + val)
  }

  /** Methods to consume API for Bookings */
  getBookList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Bookings');
  }

  addBook(val: any){
    return this.http.post(this.APIUrl + '/Bookings', val)
  }

  updateBook(val: any){
    return this.http.put(this.APIUrl + '/Bookings', val)
  }

  deleteBook(val: any){
    return this.http.delete(this.APIUrl + '/Bookings/' + val)
  }

  /** for the dropdownlist */
  getAllBuses(): Observable<any[]>{
    return this. http.get<any>(this.APIUrl + '/Bookings/GetAllBuses');
  }

  // extract last BookId
}
