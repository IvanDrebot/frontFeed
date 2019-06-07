import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FeedsService} from '../../services/feeds.service';
import {Feed} from '../../models/Feed';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  isShow: Boolean = false;
  feeds: Feed[] = [];

  constructor(
    private feedService: FeedsService
  ) {
  }

  ngOnInit() {
    this.fetchFeeds();
  }

  fetchFeeds() {
    this.feedService.fetchFeed().subscribe(res => {
      // @ts-ignore
      this.feeds = res.table;
    });
  }

  show() {
    this.isShow = !this.isShow;
  }

  createFeed(feed: NgForm) {
    const data = feed.value;
    if (data.userName.length && data.title.length && data.url.length) {
      data.id = Math.floor(Math.random() * 1000000000000);
      data.date = new Date();
      this.feeds.push(data);
      this.feedService.createFeed(data).subscribe(res => {
        console.log(res);
      });
      this.isShow = false;
    }
  }

  deleteFeed(id: string) {
    const confirm = window.confirm('Do you want to delete this feed?');
    if (confirm) {
      this.feedService.deleteFeed(id).subscribe(res => {
      });
      const index = this.feeds.findIndex(x => x.id === id);
      this.feeds.splice(index, 1);
    }

  }
}
