import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from '../core/auth/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FeedsComponent} from '../core/feed/feeds.component';
import {LogoutComponent} from '../core/auth/logout/logout.component';
import {SingleArticleComponent} from '../core/article/single-article.component';
import {SingleFeedComponent} from '../core/feed/single-feed/single-feed.component';
import {InfoComponent} from '../core/info/info.component';

const routes: Routes = [
  {path: 'info', component: InfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'feed-list', component: FeedsComponent},
  {path: 'single-feed/:id', component: SingleFeedComponent},
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
