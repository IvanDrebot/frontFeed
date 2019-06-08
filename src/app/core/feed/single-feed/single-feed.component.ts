import { Component, OnInit } from '@angular/core';
import {FeedsService} from '../../../services/feeds.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Feed} from '../../../models/Feed';
import {DataService} from '../../../services/dataService';

@Component({
  selector: 'app-single-feed',
  templateUrl: './single-feed.component.html',
  styleUrls: ['./single-feed.component.css']
})
export class SingleFeedComponent implements OnInit {

  id: String = '';
  query: any;
  feed: any;
  articles: [] = [];

  constructor(
    private feedService: FeedsService,
    private router: ActivatedRoute,
    private routes: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe(res => {
      this.query = res;
    });
    this.id = this.router.snapshot.params.id;
    this.getSingleFeed();
  }

  getSingleFeed() {
    this.feedService.fetchFeedById(this.id, this.query).subscribe(res => {
      // @ts-ignore
      this.feed = res.feed;
      // @ts-ignore
      this.articles = res.singleFeed;
      console.log(this.articles);
    });
  }

  getSingleArticle(title: any) {
    this.dataService.subject.next(title);
  }
}
