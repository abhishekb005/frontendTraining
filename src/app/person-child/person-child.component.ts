import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

import { Person } from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-child',
  templateUrl: './person-child.component.html',
  styleUrls: ['./person-child.component.css']
})
export class PersonChildComponent implements OnInit {

  @Output() sortName=new EventEmitter();

  @Output() sortAge=new EventEmitter();

  constructor() { }
  personData:Person[]=[];
  ngOnInit(): void {
   }
  sortbyName():void{
    this.sortName.emit();
  }
  sortbyAge():void{
    this.sortAge.emit();
  }

}
