import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CoinDataService {

  result:any;

  constructor(private _http: Http) { }

  getPrices() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH&tsyms=USD')
      .map(result => this.result = result.json());
  }

  getPricesByCode(code) {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + code + ',BTC,ETH,DASH&tsyms=USD')
      .map(result => this.result = result.json());
  }

  getDayStats() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DASH&tsyms=USD')
      .map(result => this.result = result.json());
  }

  getDayStatsByCode(code) {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + code + ',BTC,ETH,DASH&tsyms=USD')
      .map(result => this.result = result.json());
  }

  getList() {
    return this._http.get('https://min-api.cryptocompare.com/data/all/coinlist')
      .map(result => this.result = result.json());
  }
}
