import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { Book } from "../../model/book.model";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[];
  pageOfItems: Array<any>;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getBooks()
      .subscribe(data => {
        this.books = data;
      });
  }

  deleteBook(id: number): void {
    this.apiService.deleteBook(id)
      .subscribe(data => {
        this.books = this.books.filter(b => b.id !== id);
        console.log(data);
      })
  };

  editBook(id: number): void {
    window.localStorage.removeItem("editbookID");
    window.localStorage.setItem("editbookID", id.toString());
    this.router.navigate(['edit-book/' + id]);
  };

  addBook(): void {
    this.router.navigate(['add-book']);
  };

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
