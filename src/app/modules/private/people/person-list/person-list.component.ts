import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {
  @Input() personList?: any;

  constructor() {
   }

  ngAfterViewInit(): void {

    console.log(this.personList)
  }


}
