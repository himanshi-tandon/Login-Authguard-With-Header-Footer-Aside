import { Injectable } from '@angular/core';
import { UserLoginModel } from './user-login-model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }



  SubmitLoginDetails(loginData: UserLoginModel): Observable<any> {
    const data =
      'grant_type=password&username=' +
      loginData.username +
      '&password=' +
      encodeURIComponent(loginData.password) +
      '&client_id=099153c2625149bc8ecb3e85e03f0022' +
      '&scope=61103';

    // create headers
    const headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.httpClient.post<any>(`${environment.APIAuthorizationURL}`, data, options);

  }
}
