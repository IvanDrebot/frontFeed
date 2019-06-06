import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'http://localhost:3000/api/login';
  logoutUrl = 'http://localhost:3000/api/logout';

  constructor(private http: HttpClient) {
  }

  loginUser(credentials: User) {
    return this.http.post(this.loginUrl, credentials);
  }

  logoutUser(token: string) {
    return this.http.get(this.logoutUrl);
  }

}
