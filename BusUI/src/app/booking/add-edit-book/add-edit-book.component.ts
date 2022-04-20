import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.css']
})
export class AddEditBookComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() book: any;
  BookId: string | undefined;
  FirstName: string | undefined;
  LastName: string | undefined;
  Email: string | undefined;
  BusId: string | undefined;
  BookDate: string | undefined;
  NumberOfSeat: string | undefined;

  BusList: any=[]; /** BusID dropdownlist */

  ngOnInit(): void {
    this.loadBusList();
  }

  loadBusList(){
    this.service.getAllBuses().subscribe((data:any)=>{
      this.BusList = data;

      this.BookId = this.book.BookId;
      this.FirstName = this.book.FirstName;
      this.LastName = this.book.LastName;
      this.Email = this.book.Email;
      this.BusId = this.book.BusId;
      this.NumberOfSeat = this.book.NumberOfSeat;
    });
  }

  addBook(){
    var val = { BookId: this.BookId,
                FirstName: this.FirstName,
                LastName: this.LastName,
                Email: this.Email,
                BusId: this.BusId,
                BookDate: this.BookDate,
                NumberOfSeat: this.NumberOfSeat};
    this.service.addBook(val).subscribe(res=>{alert(res.toString());});
  }

  updateBook(){
    var val = { BookId: this.BookId,
                FirstName: this.FirstName,
                LastName: this.LastName,
                Email: this.Email,
                BusId: this.BusId,
                NumberOfSeat: this.NumberOfSeat};
    this.service.updateBook(val).subscribe(res=>{alert(res.toString());});
  }
}
