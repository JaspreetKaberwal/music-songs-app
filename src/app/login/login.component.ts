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

  constructor(private api: ApiCallsService, private router: Router) {
    let user = localStorage.getItem('user')
    if (user) {
      this.router.navigate(['home']);
    }
  }

  ngOnInit() {
  }

  login() {
    this.api.login(this.username, this.password).subscribe((resp: any) => {
      if (resp.success) {
        localStorage.setItem('user', JSON.stringify(resp.user))
        this.router.navigate(['home']);
      }
    })
  }
  signUp() {
    this.api.signUp(this.username, this.password).subscribe((resp: any) => {
      if (resp.success) {
        localStorage.setItem('user', JSON.stringify({
          username: this.username,
          password: this.password
        }))
        this.router.navigate(['home']);
      }
    })
  }
}
