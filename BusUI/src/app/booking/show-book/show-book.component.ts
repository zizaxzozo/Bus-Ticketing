import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  constructor(private service: SharedService) { }

  BookList: any=[];

  ModalTitle: string | undefined;
  ActivateAddEditBookComp: boolean = false;
  book: any | undefined;

  BookIdFilter: string="";
  FirstNameFilter: string="";
  LastNameFilter: string="";
  EmailFilter: string="";
  BusIdFilter: string="";
  BookDateFilter: string="";
  BookListWithoutFilter: any=[];

  ngOnInit(): void {
    this.refreshBookList();
  }

  addClick(){
    this.book = {
      BookId: 0,
      FirstName: "",
      LastName: "",
      Email: "",
      BusId: "",
      BookDate: "",
      NumberOfSeat: ""
    }
    this.ModalTitle = "Add Booking";
    this.ActivateAddEditBookComp = true;
  }

  editClick(item: any){
    this.book = item;
    this.ModalTitle = "Edit Booking";
    this.ActivateAddEditBookComp = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteBook(item.BookId).subscribe(data=>{
        alert(data.toString());
        this.refreshBookList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditBookComp = false;
    this.refreshBookList();
  }

  refreshBookList(){
    this.service.getBookList().subscribe(data=>{
      this.BookList=data;
      this.BookListWithoutFilter = data;
    });
  }

  FilterFn(){
    var BookIdFilter = this.BookIdFilter;
    var FirstNameFilter = this.FirstNameFilter;
    var LastNameFilter = this.LastNameFilter;
    var EmailFilter = this.EmailFilter;
    var BusIdFilter = this.BusIdFilter;
    var BookDateFilter = this.BookDateFilter;

    this.BookList = this.BookListWithoutFilter.filter(function (el: any){
      return el.BookId.toString().toLowerCase().includes(
        BookIdFilter.toString().trim().toLowerCase()
      )&&
      el.FirstName.toString().toLowerCase().includes(
        FirstNameFilter.toString().trim().toLowerCase()
      )&&
      el.LastName.toString().toLowerCase().includes(
        LastNameFilter.toString().trim().toLowerCase()
      )&&
      el.Email.toString().toLowerCase().includes(
        EmailFilter.toString().trim().toLowerCase()
      )&&
      el.BusId.toString().toLowerCase().includes(
        BusIdFilter.toString().trim().toLowerCase()
      )&&
      el.BookDate.toString().toLowerCase().includes(
        BookDateFilter.toString().trim().toLowerCase()
      )
    });
  }
}
