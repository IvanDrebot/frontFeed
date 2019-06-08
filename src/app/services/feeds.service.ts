import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Feed} from '../models/Feed';
import {addParams} from '../urlParser/parser';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  feedUrl = 'http://localhost:3000/api/feed';
  host = 'http://www.nasa.gov/press-release/nasa-opens-international-space-station-to-new-commercial-opportunities-private';

  constructor(private http: HttpClient) { }

  getFeed() {
    return this.http.get(this.host);
  }

  fetchFeed(): Observable<Feed[]> {
    return this.http.get<Feed[]>(this.feedUrl);
  }

  fetchFeedById(id, query = {}) {
    const url = addParams(this.feedUrl + '/' + id, query);
    return this.http.get(url);
  }

  createFeed(feed: Feed) {
    return this.http.post(this.feedUrl, feed);
  }

  updateFeed(feed: Feed, id: String) {
    return this.http.put(this.feedUrl + '/' + id, {feed});
  }

  deleteFeed(id) {
    return this.http.delete(this.feedUrl + '/' + id);
  }

}
