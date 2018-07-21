import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './components/metacoin/metacoin.module#MetacoinModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { enableTracing: false } // <-- for dev
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
