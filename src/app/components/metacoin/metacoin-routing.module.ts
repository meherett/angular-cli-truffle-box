import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetacoinComponent} from './metacoin.component';

const metacoinRoutes: Routes = [
  { path: '',  component: MetacoinComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(metacoinRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MetacoinRoutingModule { }
