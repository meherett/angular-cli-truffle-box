import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Web3Service } from '../web3/web3.service';

declare let require: any;
const metacoinArtifacts = require('../../../../build/contracts/MetaCoin.json');
const contract = require('truffle-contract');

@Injectable()
export class MetacoinService {

	MetaCoin = contract(metacoinArtifacts);

  constructor(
  	private web3Service: Web3Service,
  	) {
  	this.MetaCoin.setProvider(web3Service.web3.currentProvider);
  }

  getBalance(account): Observable<number> {
  	let meta;
  	return Observable.create(observer => {
  		this.MetaCoin.deployed()
  		  .then(instance => {
  		    meta = instance;
  		    return meta.getBalance.call(account, {
  		      from: account
  		    });
  		  })
  		  .then(value => {
  		    observer.next(value);
  		    observer.complete();
  		  })
  		  .catch(e => {
  		    console.log(e);
  		    observer.error(e);
  		  });
  	})
  }

  sendCoin(from, to, amount): Observable<any>{
  	let meta;
  	return Observable.create(observer => {
  	  this.MetaCoin.deployed()
  	    .then(instance => {
  	      meta = instance;
  	      return meta.sendCoin(to, amount, {
  	        from: from
  	      });
  	    })
  	    .then(() => {
  	      observer.next();
  	      observer.next();
  	    })
  	    .catch(e => {
  	    	console.log(e);
  	      observer.error(e);
  	    });
  	})
  }

}
