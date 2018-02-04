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

  constructor(private _data: CoinDataService) {

  };

  ngOnInit() {
    this.getPrices();
  }

  getPrices() {
    this._data.getPrices()
      .subscribe(result => {
        this.cryptos = result;
        console.log(result);
      })
  }
}
