import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-bus',
  templateUrl: './add-edit-bus.component.html',
  styleUrls: ['./add-edit-bus.component.css']
})
export class AddEditBusComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() bus: any;
  BusId: string | undefined;
  BusPlate: string | undefined;
  BusFrom: string | undefined;
  BusTo: string | undefined;
  StartAt: string | undefined;
  SeatType: string | undefined;
  SeatNumber: string | undefined;
  SeatAvail: string | undefined;

  ngOnInit(): void {
    this.BusId = this.bus.BusId;
    this.BusPlate = this.bus.BusPlate;
    this.BusFrom = this.bus.BusFrom;
    this.BusTo = this.bus.BusTo;
    this.StartAt = this.bus.StartAt;
    this.SeatType = this.bus.SeatType;
    this.SeatNumber = this.bus.SeatNumber;
    this.SeatAvail = this.bus.SeatAvail;
  }

  addBus(){
    var val = { BusId: this.BusId,
                BusPlate: this.BusPlate,
                BusFrom: this.BusFrom,
                BusTo: this.BusTo,
                StartAt: this.StartAt,
                SeatType: this.SeatType,
                SeatNumber: this.SeatNumber,
                SeatAvail: this.SeatAvail};
    this.service.addBus(val).subscribe(res=>{alert(res.toString());});
  }

  updateBus(){
    var val = { BusId: this.BusId,
                BusPlate: this.BusPlate,
                BusFrom: this.BusFrom,
                BusTo: this.BusTo,
                StartAt: this.StartAt,
                SeatType: this.SeatType,
                SeatNumber: this.SeatNumber,
                SeatAvail: this.SeatAvail};
    this.service.updateBus(val).subscribe(res=>{alert(res.toString());});
  }

}
