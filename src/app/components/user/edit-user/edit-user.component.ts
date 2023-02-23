import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user/user-service.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild('username') username: ElementRef = new ElementRef('');
  @ViewChild('firstname') firstname: ElementRef = new ElementRef('');
  @ViewChild('lastname') lastname: ElementRef = new ElementRef('');
  @ViewChild('address') address: ElementRef = new ElementRef('');
  @ViewChild('phone') phone: ElementRef = new ElementRef('');
  @ViewChild('email') email: ElementRef = new ElementRef('');
  @ViewChild('password') password: ElementRef = new ElementRef('');

  constructor(private router: Router, private service: UserServiceService) { }
  user: User = new User();
  ngOnInit(): void {
    this.editUser();
  }

  editUser(){
    let idUser = localStorage.getItem('editUserId');
    if (!(typeof idUser === 'undefined')) {
      this.service.getUserById(parseInt(idUser!)).subscribe(
        (data: any) => {
          this.user = data;
          this.username.nativeElement.value = this.user.username;
          this.firstname.nativeElement.value = this.user.firstname;
          this.lastname.nativeElement.value = this.user.lastname;
          this.address.nativeElement.value = this.user.address;
          this.phone.nativeElement.value = this.user.phone;
          this.email.nativeElement.value = this.user.email;
          this.password.nativeElement.value = this.user.password;
        }
      );
    }
  }

  saveEditUser(firstname: string, lastname: string, email: string, address: string, phone: string, username: string, password: string){
    let idUser = localStorage.getItem('editUserId');
    if (!(typeof idUser === 'undefined')) {
      this.user.id = parseInt(idUser!);
      this.user.firstname = firstname;
      this.user.lastname = lastname;
      this.user.email = email;
      this.user.address = address;
      this.user.phone = phone;
      this.user.username = username;
      this.user.password = password;
      this.service.updateUser(this.user).subscribe(
        (data: any) => {
          this.router.navigate(['/list-users']);
        }
      );
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

}
