import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      declarations: [RegisterComponent]
    })
      .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RegisterComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
