import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GUDARFEST-FRONTEND';
  public logged = false
  constructor(
  private auth: AuthService,
  ){
    this.auth.loggedInUser.subscribe(res => {
      if (!res || res==null){
      this.logged = false
      }else{
        this.logged = true
      }
    })
  }
}

