import { Component } from '@angular/core';
import { CoinDataService } from '../../services/coin-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  objectKeys = Object.keys;
  cryptos: any;
  dayStats: any;
  coinList: any;

  constructor(private _data: CoinDataService) {

  };

  ngOnInit() {
    this.getPrices();
    this.getDayStats();
    this.getCoinList();
  }

  getPrices() {
    this._data.getPrices()
      .subscribe(result => {
        this.cryptos = result;
      })
  }

  getDayStats() {
    this._data.getDayStats()
      .subscribe(result => {
        this.dayStats = result;
      })
  }

  getCoinList() {
    this._data.getList()
      .subscribe(result => {
        this.coinList = result;
      })
  }

  onSubmit(cryptCode) {
    this._data.getPricesByCode(cryptCode)
      .subscribe(result => {
        this.cryptos = result;
      })

    this._data.getDayStatsByCode(cryptCode)
      .subscribe(result => {
        this.dayStats = result;
      })
  }

  refreshStats() {
    this.getPrices();
    this.getDayStats();
    this.getCoinList();
  }

  buy(crypto) {
    console.log(crypto);
  }

  sell(crypto) {
    console.log(crypto);
  }
}
