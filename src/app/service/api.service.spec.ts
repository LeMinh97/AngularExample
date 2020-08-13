import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Book } from '../model/book.model';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ApiService
      ]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a collection of books', () => {
    const bookResponse = [
      {
        "id": "1",
        "bookname": "bookname 1",
        "author": "author 1",
        "publishing": "publishing 1",
        "year": 273,
        "price": 9678
      },
      {
        "id": "2",
        "bookname": "bookname 2",
        "author": "author 2",
        "publishing": "publishing 2",
        "year": 70,
        "price": 78
      },
      {
        "id": "3",
        "bookname": "bookname 3",
        "author": "author 3",
        "publishing": "publishing 3",
        "year": 38,
        "price": 8
      }
    ];
    let response;
    spyOn(service, 'getBooks').and.returnValue((of(bookResponse)));

    service.getBooks().subscribe(res => {
      response = res;
    });

    expect(response).toEqual(bookResponse);
  });

  it('should return a book with id', () => {
    const bookResponse = {
      "id": "1",
      "bookname": "bookname 1",
      "author": "author 1",
      "publishing": "publishing 1",
      "year": 273,
      "price": 9678
    };
    let response;
    spyOn(service, 'getBookById').and.returnValue((of(bookResponse)));

    service.getBookById(1).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(bookResponse);
  });

  it('should return results from the action add book', () => {
    const bookRequest = {
      "bookname": "bookname abc",
      "author": "author 1",
      "publishing": "publishing 1",
      "year": 273,
      "price": 9678
    };
    let response;
    spyOn(service, 'createBook').and.returnValue((of(Book)));

    service.createBook(bookRequest).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(Book);
  });

  it('should return results from the action update book', () => {
    const bookRequest = {
      "id": 5,
      "bookname": "bookname abc",
      "author": "author 1",
      "publishing": "publishing 1",
      "year": 273,
      "price": 967833
    };
    let response;
    spyOn(service, 'updateBook').and.returnValue((of(Book)));

    service.updateBook(bookRequest).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(Book);
  });

  it('should return results from the action delete book', () => {
    let response;
    spyOn(service, 'deleteBook').and.returnValue((of(Book)));

    service.deleteBook(10).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(Book);
  });
});;
