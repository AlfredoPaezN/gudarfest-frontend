import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonDetailComponent } from 'src/app/components/person-detail/person-detail.component';
import { FeedComponent } from 'src/app/components/feed/feed.component';


@NgModule({
  declarations: [
    FeedComponent,
    PersonDetailComponent,
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
