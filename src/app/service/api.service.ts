import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "../model/book.model";
import { BookNo } from "../model/booknoid.model";
import { Observable } from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://5f2cfa308085690016922a5a.mockapi.io/books/';

  getBooks(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getBookById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }

  createBook(book: BookNo): Observable<any> {
    return this.http.post<any>(this.baseUrl, book);
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put<any>(this.baseUrl + book.id, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}
