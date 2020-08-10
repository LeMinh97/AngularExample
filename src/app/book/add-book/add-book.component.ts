import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../service/api.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      publishing: ['', Validators.required],
      year: ['', [Validators.required, Validators.maxLength(4)]],
      price: ['', Validators.required],
    });
  }

  onSubmit() {
    this.apiService.createBook(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-book']);
      });
  }


}
