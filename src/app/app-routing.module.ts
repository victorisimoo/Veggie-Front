import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';

const routes: Routes = [

  {path: 'list-users', component: ListUserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'edit-user', component: EditUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
