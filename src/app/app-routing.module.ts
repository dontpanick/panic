import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';

import{BitComponent} from './bit/bit.component';


const routes: Routes = [
  { path: 'bit', component: BitComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
