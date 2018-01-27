import { Component, OnInit } from '@angular/core';
import { AuthService } from 'AuthService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onClickLogout(){
    this.authService.logout();
  }
}
