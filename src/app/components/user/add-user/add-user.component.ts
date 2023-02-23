import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/service/user/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  constructor(private route: Router, private http: UserServiceService) {}

  ngOnInit(): void {

  }

  addUser(firstname: string, lastname: string, email: string, address: string, phone: string, username: string, password: string) {
    let user: User = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.address = address;
    user.phone = phone;
    user.username = username;
    user.password = password;
    this.http.addUser(user).subscribe(
      (data: User) => {
        this.route.navigate(['/list-users']);
      }
    );
  }

}
