import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'veggie-front';

  constructor(private router: Router) { }

  list_users(){
    this.router.navigate(['list-users']);
  }

  add_user(){
    this.router.navigate(['add-user']);
  }

}


