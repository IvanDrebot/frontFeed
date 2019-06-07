import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../../services/login.service';
import {Router} from '@angular/router';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    private appComp: AppComponent
  ) {
  }

  ngOnInit() {
  }


  loginUser(login: NgForm) {
    const credentials = login.value;
    if (credentials.userName.length && credentials.password.length) {
      this.router.navigate(['/feed-list']);
      this.loginService.loginUser(credentials).subscribe((newUser: Response) => {
      });
      localStorage.setItem('user', credentials.userName);
      this.appComp.user = credentials.userName;
    }
  }
}
