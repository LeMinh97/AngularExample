import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../model/user.model';
import { of, Observable } from 'rxjs';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return result register', () => {
    const userRequest = {
      "id": "",
      "username": "abc",
      "password": "123456",
      "firstName": "le",
      "lastName": "minh",
      "token": ""
    };
    let response;
    spyOn(service, 'register').and.returnValue((of(User)));

    service.register(userRequest).subscribe(res => {
      response = res;
    });

    expect(response).toEqual(User);
  });
});
