import { Component, OnInit,Input } from '@angular/core';
import {crypt} from '../crypt';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit {

  @Input() coin:crypt;
  constructor() { }

  ngOnInit() {
  }

}
