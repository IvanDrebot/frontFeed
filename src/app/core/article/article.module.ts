import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleListComponent} from './article-list/article-list.component';
import {SingleArticleComponent} from './single-article/single-article.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    SingleArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleListComponent,
    SingleArticleComponent
  ]
})
export class ArticleModule { }
