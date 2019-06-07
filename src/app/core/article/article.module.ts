import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingleArticleComponent} from './single-article.component';

@NgModule({
  declarations: [
    SingleArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SingleArticleComponent
  ]
})
export class ArticleModule { }
