import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    PrivateComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
