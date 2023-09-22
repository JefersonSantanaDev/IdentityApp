import { AccountService } from './../account/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public accountService: AccountService) {}

  logout() {
    this.accountService.logout();
  }
}
