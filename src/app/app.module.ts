import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FeedModule} from './core/feed/feed.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MainRoutingModule} from './routing/main-routing.module';
import { LogoutComponent } from './core/auth/logout/logout.component';
import {ArticleModule} from './core/article/article.module';
import {LoginComponent} from './core/auth/login/login.component';
import { InfoComponent } from './core/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    LoginComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MainRoutingModule,
    FeedModule,
    ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
