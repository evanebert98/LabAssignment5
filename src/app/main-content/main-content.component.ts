import { Component, OnInit } from '@angular/core';

interface IStudent {
  id:number;
  firstName: string;
  LastName: string;
  course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
studentArray: Array<object> = [];


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

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Evan',
        lastName: 'Ebert',
        course:'Programming'
      },
      {
        id: 2,
        firstName: 'Mike',
        lastName: 'Tyson',
        course:'Boxing'
      },
      {
        id: 3,
        firstName: 'Mohammid',
        lastName: 'Ali',
        course:'Super Boxing'
      }
    ];
  } 
  addStudent () {
    this.studentArray.unshift({
      id: 1,
      firstName: 'Evan',
      lastName: 'Ebert',
      course:'Programming' 
    });
  }
  removeStudent(index: number) {
    console.log('index', index);
    this.studentArray.splice(index, 2);
  }

}
