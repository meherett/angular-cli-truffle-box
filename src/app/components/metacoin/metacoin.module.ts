import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetacoinComponent } from './metacoin.component';
import { MetacoinRoutingModule } from './metacoin-routing.module';
import { Web3Service, MetacoinService } from '../../services/services';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const SERVICES = [ Web3Service, MetacoinService ];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MetacoinRoutingModule
  ],
  declarations: [MetacoinComponent],
  providers: [SERVICES]
})
export class MetacoinModule { }
