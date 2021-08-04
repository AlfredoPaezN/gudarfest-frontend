import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { FeedComponent } from './feed.component';
import { PersonDetailComponent } from './person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonListComponent } from './person-list/person-list.component';
import { AccordionModule } from 'primeng/accordion'
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    FeedComponent,
    PersonDetailComponent,
    PersonListComponent,
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    TableModule,
  ]
})
export class PeopleModule { }
