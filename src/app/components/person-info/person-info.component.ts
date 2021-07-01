import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  providers: [RecordService],
})
export class PersonInfoComponent implements OnInit {
  infoReceive1: string[] = [];
  infoReceive2: string[] = [];
  infoReceive3: string[] = [];

  getInfoFromService1() {
    this.infoReceive1 = this.RecService.getInfo1();
  }
  getInfoFromService2() {
    this.infoReceive2 = this.RecService.getInfo2();
  }
  getInfoFromService3() {
    this.infoReceive3 = this.RecService.getInfo3();
  }

  constructor(private RecService: RecordService) {}

  ngOnInit(): void {}
}
