import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../core/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FeedsComponent} from '../core/feed/feeds.component';
import {LogoutComponent} from '../core/logout/logout.component';
import {ArticleListComponent} from '../core/article/article-list/article-list.component';
import {SingleArticleComponent} from '../core/article/single-article/single-article.component';

const routes: Routes = [
  {path: 'register', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'feed-list', component: FeedsComponent},
  {path: 'article', component: ArticleListComponent},
  {path: 'single-article', component: SingleArticleComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
