import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedsComponent} from './feeds.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SingleFeedComponent } from './single-feed/single-feed.component';

@NgModule({
  declarations: [
    FeedsComponent,
    SingleFeedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FeedsComponent
  ]
})
export class FeedModule { }
