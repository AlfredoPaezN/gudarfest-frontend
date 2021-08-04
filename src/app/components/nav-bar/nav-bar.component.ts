import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
  private authService: AuthService,
  private router: Router,) { }

  ngOnInit(): void {
  }
  LogoutEvent() {
    this.authService.logoutUser()
}
}
