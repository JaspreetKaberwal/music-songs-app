import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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

  validate(){
    this.error = ''

    if(!this.username) {this.error = 'username required';return false}
    if(!this.password) {this.error = 'password required';return false}

    return true;
  }

  signUp() {
    if(!this.validate()) return
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
