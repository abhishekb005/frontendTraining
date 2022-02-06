import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-parent',
  templateUrl: './person-parent.component.html',
  styleUrls: ['./person-parent.component.css']
})
export class PersonParentComponent implements OnInit {


  constructor(private personService :PersonService) { }
  
  personData:Person[]=[];
  ngOnInit(): void {
    this.personService.getPersonData().subscribe(allData=>this.personData=allData);
  }
  sortbyName():void{
    this.personData=this.personData.sort((obj1,obj2)=>{
if(obj1.name>obj2.name){return 1;}
if(obj1.name<obj2.name){return -1;}
return 0;
    });
  }

  sortbyAge():void{
    this.personData=this.personData.sort((obj1,obj2)=>{
if(obj1.age>obj2.age){return 1;}
if(obj1.age<obj2.age){return -1;}
return 0;
    });
  }

}
