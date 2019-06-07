import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: String = '';

  links = [
    {url: '/info', name: 'Contact'},
    {url: '/info', name: 'About project'},
    {url: '/feed-list', name: 'Feed'},
    {url: '/login', name: 'Sign in'}
  ];

  constructor(
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }

  logout() {
    const confirm = window.confirm('Do you want to exit?');
    if (confirm) {
      this.router.navigate(['/logout']);
    }
  }
}
