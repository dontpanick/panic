import { Component, OnInit } from '@angular/core';
import { crypt } from '../crypt';
//import { CRYPTLIST } from '../newcrypt';
import { CoinService } from '../coin.service';
/*
import{MessageService} from '../message.service';
import { Observable, of } from 'rxjs';
*/

@Component({
  selector: 'app-bit',
  templateUrl: './bit.component.html',
  styleUrls: ['./bit.component.css']
})

export class BitComponent implements OnInit {

  //init the selected coin type
  selectedCoin = crypt;

  //init the crypt list
  listnew: crypt[];


  //constructor(private coinService: CoinService) { }
  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.getCoins();
  }


  //get data with observable service
  getCoins():void{
  //  this.CoinService.getCoins().subscribe(listnew => this.listnew=listnew);
  this.coinService.getCoins().subscribe(listnew=>this.listnew=listnew);
      
  }


  // on select function 
  onSelect(coin: crypt): void {
    this.selectedCoin = coin;
  }
}
