import { Component, NgZone, OnInit } from '@angular/core';
import { Web3Service } from '../../services/web3/web3.service';
import { MetacoinService } from '../../services/metacoin/metacoin.service';
import { CanBeNumber } from '../../../validation/validation';
import { SendMetacoin} from './metacoin';

@Component({
  selector: 'app-metacoin',
  templateUrl: './metacoin.component.html',
  styleUrls: ['./metacoin.component.css']
})
export class MetacoinComponent implements OnInit {

  account: any;
  accounts: any;

  balance: number;
  status: string;
  success = false;
  warning = false;
  error = false;
  canBeNumber = CanBeNumber;
  sendMetaCoin = new SendMetacoin();

  constructor (
    private ngZone: NgZone,
    private web3Service: Web3Service,
    private metacoinService: MetacoinService,
    ) {
    this.onReady();
  }

  ngOnInit() {
  }

  setStatus(message, success, warning, error) {
    this.status = message;
    this.success = success;
    this.warning = warning;
    this.error = error;
  };

  onReady() {
    this.web3Service.getAccounts().subscribe(accs => {
      this.accounts = accs;
      this.account = this.accounts[0];
      this.ngZone.run(() => this.refreshBalance());
      }, err => alert(err))
  };

  refreshBalance() {
    this.metacoinService.getBalance(this.account).subscribe(value => {
        this.balance = value;
      }, () => this.setStatus('Error getting balance',  false, false, true))
  };

  sendCoin(sendMetaCoin) {
    this.setStatus('Initiating transaction... (please wait)', false, true, false);
    this.metacoinService.sendCoin(this.account, sendMetaCoin.toAddress, sendMetaCoin.amount).subscribe(() => {
        this.setStatus('Transaction complete!', true, false, false);
        this.refreshBalance();
      }, () => this.setStatus('Error sending coin.', false, false, true))
  };
}
