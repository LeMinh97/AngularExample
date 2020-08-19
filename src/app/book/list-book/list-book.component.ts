import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { Book } from "../../model/book.model";
import { AccountService } from '../../service/account.service';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[];
  pageOfItems: Array<any>;

  constructor(private router: Router, private apiService: ApiService, private accountService: AccountService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.apiService.getBooks()
      .subscribe(data => {
        this.books = data;
      });
  }

  deleteBook(id: number): void {
    const user = this.accountService.userValue;
    if (user) {
      this.apiService.deleteBook(id)
        .subscribe(data => {
          this.books = this.books.filter(b => b.id !== id);
          this.notificationService.showSuccess("Deleted success!", "Notification");
        },
          error => {
            this.notificationService.showError(error, "Notification");
          });
    } else this.router.navigate(['../account/login']);
  };

  editBook(id: number): void {
    window.localStorage.removeItem("editbookID");
    window.localStorage.setItem("editbookID", id.toString());
    this.router.navigate(['../book/edit/' + id]);
  };

  addBook(): void {
    this.router.navigate(['../book/add']);
  };

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
