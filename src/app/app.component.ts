import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links = [
    {url: '/feed-list', name: 'Feed'},
    {url: '/article', name: 'Article'},
    {url: '/login', name: 'Sign in'}
  ];
}
