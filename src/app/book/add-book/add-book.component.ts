import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  loading = false;
  submitted = false;
  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      publishing: ['', Validators.required],
      year: ['', [Validators.required, Validators.max(2020)]],
      price: ['', Validators.required]
    });
  }

  get f() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true;

    console.log(this.addForm.controls.year);

    if (this.addForm.invalid) {
      return;
    }
    this.loading = true;

    this.apiService.createBook(this.addForm.value)
      .subscribe(data => {
        this.notificationService.showSuccess("Added success!", "Notification");
        this.router.navigate(['../']);
      },
        error => {
          this.loading = false;
          this.notificationService.showError(error, "Notification");
        });
  }


}
