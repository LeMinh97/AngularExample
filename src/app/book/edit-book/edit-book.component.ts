import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Book } from "../../model/book.model";
import { ApiService } from "../../service/api.service";
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: Book;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    let bookID = window.localStorage.getItem("editbookID");
    if (!bookID) {
      alert("Invalid action.")
      this.router.navigate(['list-book']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      publishing: ['', Validators.required],
      year: ['', [Validators.required, Validators.maxLength(4)]],
      price: ['', Validators.required],
    });
    this.apiService.getBookById(+bookID)
      .subscribe(data => {
        this.editForm.setValue(data);
        console.log(data);
      });
  }

  onSubmit() {
    this.apiService.updateBook(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.notificationService.showSuccess("Updated success!", "Notification");
          this.router.navigate(['list-book']);
        },
        error => {
          this.notificationService.showError(error, "Notification");
        });
  }
}
