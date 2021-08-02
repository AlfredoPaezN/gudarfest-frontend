import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { PeopleService } from 'src/app/core/services/people.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  public people: any = {}

  constructor(private feed: PeopleService) {
  }

  ngOnInit(): void {
    const feedObserver: Observer<any> = {
      next: value => this.people = value,
      error: error => console.log,
      complete: () => { }
    }

    this.feed.readAll().subscribe(feedObserver)
  }

}
