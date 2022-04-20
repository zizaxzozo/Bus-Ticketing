import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-bus',
  templateUrl: './show-bus.component.html',
  styleUrls: ['./show-bus.component.css']
})
export class ShowBusComponent implements OnInit {

  constructor(private service: SharedService) { }

  BusList: any=[];

  ModalTitle: string | undefined;
  ActivateAddEditBusComp: boolean = false;
  bus: any | undefined;

  BusIdFilter: string="";
  BusPlateFilter: string="";
  BusFromFilter: string="";
  BusToFilter: string="";
  StartAtFilter: string="";
  SeatTypeFilter: string="";
  BusListWithoutFilter: any=[];

  ngOnInit(): void {
    this.refreshBusList();
  }

  addClick(){
    this.bus = {
      BusId: 0,
      BusPlate: "",
      BusFrom: "",
      BusTo: "",
      StartAt: "",
      SeatType: "",
      SeatNumber: "",
      SeatAvail: ""
    }
    this.ModalTitle = "Add Bus";
    this.ActivateAddEditBusComp = true;
  }

  editClick(item: any){
    this.bus = item;
    this.ModalTitle = "Edit Bus";
    this.ActivateAddEditBusComp = true;
  }

  deleteClick(item: any){
    if(confirm('Are you sure??')){
      this.service.deleteBus(item.BusId).subscribe(data=>{
        alert(data.toString());
        this.refreshBusList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditBusComp = false;
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
    var BusIdFilter = this.BusIdFilter;
    var BusPlateFilter = this.BusPlateFilter;
    var BusFromFilter = this.BusFromFilter;
    var BusToFilter = this.BusToFilter;
    var StartAtFilter = this.StartAtFilter;
    var SeatTypeFilter = this.SeatTypeFilter;

    this.BusList = this.BusListWithoutFilter.filter(function (el: any){
      return el.BusId.toString().toLowerCase().includes(
        BusIdFilter.toString().trim().toLowerCase()
      )&&
      el.BusPlate.toString().toLowerCase().includes(
        BusPlateFilter.toString().trim().toLowerCase()
      )&&
      el.BusFrom.toString().toLowerCase().includes(
        BusFromFilter.toString().trim().toLowerCase()
      )&&
      el.BusTo.toString().toLowerCase().includes(
        BusToFilter.toString().trim().toLowerCase()
      )&&
      el.StartAt.toString().toLowerCase().includes(
        StartAtFilter.toString().trim().toLowerCase()
      )&&
      el.SeatType.toString().toLowerCase().includes(
        SeatTypeFilter.toString().trim().toLowerCase()
      )
    });
  }
}
