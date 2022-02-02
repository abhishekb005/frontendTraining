import { Injectable } from '@angular/core';
import { listCurrency } from './mock-currency';
import { Currency } from './currency';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
  getAllCurrency():Currency[]{
    return listCurrency;
  }
}
