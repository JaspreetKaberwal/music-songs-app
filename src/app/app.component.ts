import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from 'src/app/api-calls.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music';

  constructor(private api: ApiCallsService, private router: Router) {
    let user = localStorage.getItem('user')
    if (user) {
      this.router.navigate(['contact']);
    }
  }

  main() {
    this.router.navigate(['main']);
  }

  contact() {
    this.router.navigate(['contact']);
  }

  login() {
    this.router.navigate(['login']);
  }

  signup() {
    this.router.navigate(['signup']);
  }
}
