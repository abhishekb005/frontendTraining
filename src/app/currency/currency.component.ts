import { Component, OnInit } from '@angular/core';
import { Currency } from '../currency';
import { CurrencyService } from '../currency.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  allCurrency?:Currency[];
  givenSelectedCurrency:Currency={id:3,name:"Dollar",rate:1};
  findSelectedCurrency:Currency={id:3,name:"Dollar",rate:1};
  givenAmount:number=500;
  findAmount:number=(this.givenAmount/this.givenSelectedCurrency.rate)*this.findSelectedCurrency.rate;

  constructor(private currecnyService:CurrencyService,private messageService:MessageService) { }
 
  ngOnInit(): void {
    this.getAllCurrency();
    this.calculate();
  }
getAllCurrency():void{
  this.allCurrency=this.currecnyService.getAllCurrency();
  this.messageService.add("GOt All Currency");
}
selectGivenCurrency(currency:Currency): void{
  this.givenSelectedCurrency=currency;
  this.findAmount=(this.givenAmount/this.givenSelectedCurrency.rate)*this.findSelectedCurrency.rate;

  this.messageService.add(`Given Currency selceted :${currency.name}`);
}
selectFindCurrency(currency:Currency): void{
  this.findSelectedCurrency=currency;
  this.findAmount=(this.givenAmount/this.givenSelectedCurrency.rate)*this.findSelectedCurrency.rate;

  this.messageService.add(`Find Currency selceted :${currency.name}`);
}
calculate():void{
  this.findAmount=(this.givenAmount/this.givenSelectedCurrency.rate)*this.findSelectedCurrency.rate;
  this.messageService.add(`Calculate Currency  ,currency At Given :${this.givenSelectedCurrency.name}`);
  this.messageService.add(`Calculate Currency  ,Value At Given :${this.givenAmount}`);
  this.messageService.add(`Calculate Currency  ,currency At find :${this.findSelectedCurrency.name}`);
  this.messageService.add(`Calculate Currency  :${this.findAmount}`);
}
}
