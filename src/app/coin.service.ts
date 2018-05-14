import { Injectable } from '@angular/core';
import{crypt} from './crypt';
import{CRYPTLIST} from './newcrypt';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private messageService: MessageService) { }

  getCoins(): Observable<crypt[]>{
   //message being send
   this.messageService.add('Coin service fetched');
   return of(CRYPTLIST);
  }
}
