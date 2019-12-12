import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string;
  username: string;
  error:string;

  constructor(private api: ApiCallsService, private router: Router) {
    let user = localStorage.getItem('user')
    if (user) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
  }

  validate(){
    this.error = ''

    if(!this.username) {this.error = 'username required';return false}
    if(!this.password) {this.error = 'password required';return false}

    return true;
  }

  login() {
    if(!this.validate()) return
    this.api.login(this.username, this.password).subscribe((resp: any) => {
      if (resp.success) {
        localStorage.setItem('user', JSON.stringify(resp.user))
        this.router.navigate(['home']);
      }else{
        this.error = 'incorrect username/password'
      }
    })
  }
}
