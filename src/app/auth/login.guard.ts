import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginFormComponent } from '../login-form/login-form.component';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private dialog: MatDialog) { }
  public prompt(data: any = 'signIn'): Promise<boolean> {
    return this.dialog.open(LoginFormComponent, { data })
      .afterClosed().toPromise();
  }




  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (sessionStorage.getItem('authenticated') === 'false' || sessionStorage.getItem('authenticated') === null)
      return this.prompt();

    else if (sessionStorage.getItem('authenticated') === 'true') {
      //this.router.navigateByUrl('');
      return true;
    }
    else {
      this.router.navigateByUrl('');
      return false;
    }

  }

}
