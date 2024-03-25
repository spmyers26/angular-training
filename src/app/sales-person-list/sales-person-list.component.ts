import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an arry of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kamar", "anupkumar@luv2code.com", 50000),
    new SalesPerson("John", "Doe", "johndoe@luv2code.com", 40000),
    new SalesPerson("Claire", "Murphy", "clairemurphy@luv2code.com", 90000),
    new SalesPerson("Mai", "Truong", "maitruong@luv2code.com", 60000)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
