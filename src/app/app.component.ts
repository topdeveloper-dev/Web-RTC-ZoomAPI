import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  
  constructor(private socialAuthSrv: SocialAuthService, public router: Router) { }

  ngOnInit() {
    this.socialAuthSrv.authState.subscribe((user) => {
      if (user != null) {
        this.router.navigate(['home']); 
      }
    });
  }
  
}
