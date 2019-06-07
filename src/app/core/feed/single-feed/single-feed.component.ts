import { Component, OnInit } from '@angular/core';
import {FeedsService} from '../../../services/feeds.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Feed} from '../../../models/Feed';

@Component({
  selector: 'app-single-feed',
  templateUrl: './single-feed.component.html',
  styleUrls: ['./single-feed.component.css']
})
export class SingleFeedComponent implements OnInit {

  id: String = '';
  feed: any;

  constructor(
    private feedService: FeedsService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.params.id;
    this.getSingleFeed();
  }

  getSingleFeed() {
    this.feedService.fetchFeedById(this.id).subscribe(res => {
      this.feed = res;
    });
  }

}
