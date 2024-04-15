import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  loggedIn = true;
  userMenu: any[] = [];
  userPictureOnly: boolean = false;
  fullname = 'Admin User';
  constructor() {
    this.userMenu = [
      {
        title: 'Adminstration',
        icon: 'people-outline',
        url: '/',
      },
      {
        title: 'Logout',
        icon: 'power-outline',
        url: '/auth/login',
      },
    ];
  }
}
