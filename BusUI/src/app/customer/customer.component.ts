import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service: SharedService) { }

  BusList: any=[];

  ModalTitle: string | undefined;
  ActivateSelectCustComp: boolean = false;
  bus: any | undefined;
  book: any | undefined;

  BookId: string | undefined;
  FirstName: string | undefined;
  LastName: string | undefined;
  Email: string | undefined;
  BusId: string | undefined;
  BookDate: string | undefined;
  NumberOfSeat: string | undefined;

  BusFromFilter: string="";
  BusToFilter: string="";
  BusListWithoutFilter: any=[];

  ngOnInit(): void {
    this.refreshBusList();
  }

  selectClick(item: any){
    this.BusId = item.BusId;
    this.book = item;
    this.ModalTitle = "Select Booking";
    this.ActivateSelectCustComp = true;
  }

  addBook(){
    var val = { BookId: this.BookId,
                FirstName: this.FirstName,
                LastName: this.LastName,
                Email: this.Email,
                BusId: this.BusId,
                BookDate: this.BookDate,
                NumberOfSeat: this.NumberOfSeat};
                console.log(val);
    this.service.addBook(val).subscribe(res=>{alert(res.toString());});
  }

  closeClick(){
    this.ActivateSelectCustComp = false;
    this.refreshBusList();
  }

  refreshBusList(){
    this.service.getBusList().subscribe(data=>{
      this.BusList = data;
      this.BusListWithoutFilter = data;
    });
  }

  /** Filter function */
  FilterFn(){
    var BusFromFilter = this.BusFromFilter;
    var BusToFilter = this.BusToFilter;

    this.BusList = this.BusListWithoutFilter.filter(function (el: any){
      return el.BusFrom.toString().toLowerCase().includes(
        BusFromFilter.toString().trim().toLowerCase()
      )&&
      el.BusTo.toString().toLowerCase().includes(
        BusToFilter.toString().trim().toLowerCase()
      )
    });
  }

}
