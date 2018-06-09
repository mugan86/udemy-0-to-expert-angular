import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {
    console.log('AuthGuard Service start!');
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(next);
    if (this.authService.isAuthenticated()) {
      console.info('Guard pass! :)');
      return true;
    }
    // else 
    console.error('Block by guard');
    return false;
  }
}
