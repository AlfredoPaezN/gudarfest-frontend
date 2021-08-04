import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './person/person.component';
import { FeedComponent } from './feed.component';

const routes: Routes = [
  {path: '', component: FeedComponent},
  {path: 'person', component: PersonDetailComponent},
  {path: 'person/:id', component: PersonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
