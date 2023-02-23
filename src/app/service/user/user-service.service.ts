import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User[] = [];
  url_users = 'http://localhost:8080/veggie-back/veggie/v1/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.url_users);
  }


  addUser(user: User) {
    return this.http.post<User>(this.url_users, user);
  }

  getUserById(userId: number) {
    return this.http.get<User>(this.url_users + '/' + userId);
  }

  updateUser(user: User) {
    return this.http.put<User>(this.url_users + '/' + user.id, user);
  }

  deleteUser(userId: number) {
    return this.http.delete<User>(this.url_users + '/' + userId);
  }

}
