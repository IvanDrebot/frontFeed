import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/dataService';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  singleArticle: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.subject.subscribe(res => {
      this.singleArticle = res;
      console.log(this.singleArticle);
    });
  }

}
