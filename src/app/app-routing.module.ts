import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from "./book/add-book/add-book.component";
import { EditBookComponent } from "./book/edit-book/edit-book.component";
import { ListBookComponent } from "./book/list-book/list-book.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component"
import { AuthGuard } from './_helpers/auth.guard';
import { UploadImageComponent } from "./upload-image/upload-image.component";

const routes: Routes = [
  { path: '', component: ListBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upload', component: UploadImageComponent, canActivate: [AuthGuard] },
  {
    path: 'book',
    children: [
      {
        path: '',
        redirectTo: 'list-book',
        pathMatch: 'full'
      },
      {
        path: 'list-book',
        component: ListBookComponent
      },
      {
        path: 'add-book',
        component: AddBookComponent, canActivate: [AuthGuard]
      },
      {
        path: 'edit-book/:id',
        component: EditBookComponent, canActivate: [AuthGuard]
      }
    ]
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
