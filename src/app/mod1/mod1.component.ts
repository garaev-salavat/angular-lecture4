import { DatePipe, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { PhonePipe } from './phone.pipe';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
  providers: [DatePipe, SlicePipe],
})
export class Mod1Component implements OnInit {
  date = Date.now();

  money: number = 1000000;
  pi: number = 3.1415926535;
  textHello: string = 'Hello, world!';

  phone: Observable<string>;

  phoneNum = '9177571120';
  phoneNums = [
    '9177571120',
    '9177571121',
    '9177571122',
    '9177571123',
    '9177571124',
  ];

  constructor(
    private datePipe: DatePipe,
    private slicePipe: SlicePipe,
    private phonePipe: PhonePipe
  ) {
    console.log(datePipe.transform(this.date, 'MMMM'));
    console.log(slicePipe.transform(this.textHello, 2, 5));
  }

  ngOnInit(): void {
    this.blackBox();
  }

  get dateNow(): string {
    return this.datePipe.transform(this.date, 'MMMM');
  }

  get getTextHello(): string {
    return this.slicePipe.transform(this.textHello, 2, 5);
  }

  get getPhone(): string {
    return this.phonePipe.transform(this.phoneNums);
  }

  blackBox() {
    this.phone = interval(500).pipe(map((i: number) => this.phoneNums[i]));
  }
}
