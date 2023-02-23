import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private http: UserServiceService, private router: Router) { }
  users: User [] = [];
  ngOnInit(): void {
    this.http.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      }
    );
  }

  editUser(user: User) {
    if (typeof user.id === 'undefined') {
      user.id = 0; // Asignar un valor por defecto
    }
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['/edit-user']);
  }

  deleteUser(user: User) {
    if (typeof user.id === 'undefined') {
      user.id = 0; // Asignar un valor por defecto
    }
    this.http.deleteUser(user.id).subscribe(
      (data: User) => {
        this.ngOnInit();
      }
    );
  }
}
