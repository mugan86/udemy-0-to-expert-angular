import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-protect',
  templateUrl: './protect.component.html',
  styles: []
})
export class ProtectComponent implements OnInit {

  constructor(private auth: AuthService) { }
  profile: any;
  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
    
  }

}
