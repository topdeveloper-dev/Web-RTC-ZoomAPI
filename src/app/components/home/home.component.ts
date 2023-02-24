import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private socialAuthSrv: SocialAuthService, public router: Router) { }

  ngOnInit() {
    this.socialAuthSrv.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  
}
