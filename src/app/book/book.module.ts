import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListBookComponent } from './list-book/list-book.component';

import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BookRoutingModule,
        JwPaginationModule
    ],
    declarations: [
        AddBookComponent,
        EditBookComponent,
        ListBookComponent
    ]
})
export class BookModule { }