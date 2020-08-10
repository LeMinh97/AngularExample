import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from "./book/add-book/add-book.component";
import { EditBookComponent } from "./book/edit-book/edit-book.component";
import { ListBookComponent } from "./book/list-book/list-book.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component"
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'add-book', component: AddBookComponent, canActivate: [AuthGuard] },
  { path: 'list-book', component: ListBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent, canActivate: [AuthGuard] },
  { path: '', component: ListBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
