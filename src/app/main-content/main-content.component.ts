import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() {
    this.students[0] = {
      id:1,
      firstName: 'Evan',
      lastName: 'Ebert',
      course: 'Programming'
    }
    this.students[1] = {
      id:1,
      firstName: 'Tom',
      lastName: 'Brady',
      course: 'Swimming'
    }
    this.students[2] = {
      id:1,
      firstName: 'Mark',
      lastName: 'Zucc',
      course: 'Business'
    }
   }

  ngOnInit(): void {
  }

}
