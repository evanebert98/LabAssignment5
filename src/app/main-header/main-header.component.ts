import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private firstName: string;
  private lastName: string;

  constructor() {
    this.firstName = 'Evan';
    this.lastName = 'Ebert';
    }

    showGreeting() {
        const row2= document.getElementById("r1c2")
      row2.innerHTML = 'Welcome ' + this.firstName + ' ' + this.lastName + '.'  
    }

    resetGreeting () {
        const row2= document.getElementById("r1c2");
        row2.innerHTML = 'r1c2';
    }

  ngOnInit(): void {
  }

}
