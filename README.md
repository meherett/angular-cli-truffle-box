# Angular Cli Truffle Box

<p align="center">		
  <img src="https://raw.githubusercontent.com/meherett/angular-cli-truffle-box/master/src/assets/meherett-logo.png">		
</p>	

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.

Write, compile & deploy smart contracts for Ethereum.

This Truffle Box provides a base for working with the Truffle Framework and Angular. It provides a basic working example of the MetaCoin contracts with Angular components.

## Requirements
###### You will need Node.js (tested with version 8.9.x). This will include npm
###### You will also need the MetaMask plugin for Chrome/Firefox.
1. Install Angular CLI
```
npm install -g @angualr/cli
```
2. Install Truffle Framework
```
npm install -g truffle
```
3. Install Ethereum client
```
npm install -g ganache-cli [ganache-cli] or
npm install -g ethereumjs-testrpc [testrpc]
```

## Download BOX
##### Using Truffle
```
truffle unbox meherett/angular-cli-truffle-box
```
##### Using Git
```
git clone https://www.github.com/meherett/angular-cli-truffle-box.git
```
##### Install Packages
```
npm install or yarn
```

## Running
##### Run Ethereum client `http://localhost:8545`
```
testrpc or ganache-cli
```
##### Compile Solidity Contract
```
truffle compile
```
##### Deploy Solidity Contract into Ethereum client. Make sure that testrpc or ganache-cli is working on localhost:8545
```
truffle migrate
```
##### Start Angular-CLI. Navigate to `http://localhost:4200`
```
ng serve
```
##### Making sure you have configured MetaMask. ```Send MetaCoins!```

<p align="center">		
  <img src="https://raw.githubusercontent.com/meherett/angular-cli-truffle-box/master/screenshot.png">		
</p>	

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Testing
1. Running unit tests via [Karma](https://karma-runner.github.io):
  ```
  ng test
  ```
2. Running the Truffle tests [Truffle](https://truffleframework.com):
  ```
  truffle test
  ```
3. Running end-to-end tests via [Protractor](http://www.protractortest.org/):
  ```
  ng e2e
 ```
 
 ## Releasing
Using the Angular CLI you can build a distributable of your app. Will be placed in `dist/`. Use the `--prod` flag for a production build.
 ```
   ng build
 ```
 
## Further help
##### Angular-CLI
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI](https://github.com/angular/angular-cli/blob/master/README.md).
##### Truffle
To get more help on the Truffle use `truffle help` or go check out the [Truffle](https://truffleframework.com/docs).
##### Truffle-Metamask
Go check out the [Truffle-Metamask](http://truffleframework.com/tutorials/truffle-and-metamask).

## Contact me 
```Email: meherett@zoho.com```

```Phone Number: +251 939694717```

```Telegram: https://t.me/meherett```
