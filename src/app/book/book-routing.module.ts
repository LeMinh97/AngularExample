import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
    { path: '', component: ListBookComponent },
    { path: 'add', component: AddBookComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: EditBookComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule { }