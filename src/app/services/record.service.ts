import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  person1: string[] = ['Austris Daugulis', 'ID-5614748437', 'asdfas@dasd.com'];
  person2: string[] = ['Jon Doe', 'ID-5614748437', 'asdfas@dasd.com'];
  person3: string[] = ['Kate leo', 'ID-5614748437', 'asdfas@dasd.com'];

  getInfo1(): string[] {
    return this.person1;
  }
  getInfo2(): string[] {
    return this.person2;
  }
  getInfo3(): string[] {
    return this.person3;
  }

  constructor() {}
}
