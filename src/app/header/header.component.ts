import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string;
  authenticated: boolean = false;
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('authenticated') === 'true') {
      this.authenticated = true;
      this.userName = sessionStorage.getItem('user')
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res === true) {
        this.ngOnInit();
      }
    })

  }

  logout() {
    sessionStorage.clear();
    this.authenticated = false
    this.router.navigate(['home']);
    //this.ngOnInit();
  }

}
