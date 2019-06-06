import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }


  loginUser(login: NgForm) {
    const credentials = login.value;
    this.router.navigate(['/feed-list']);
    this.loginService.loginUser(credentials).subscribe((newUser: Response) => {
    });
  }
}
