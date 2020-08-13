import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookComponent } from './add-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { By } from '@angular/platform-browser';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      declarations: [AddBookComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    element = fixture.debugElement.query(By.css('button')).nativeElement;
    element.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it(`form should be invalid`, async(() => {
    component.addForm.controls['bookname'].setValue('');
    component.addForm.controls['author'].setValue('');
    component.addForm.controls['publishing'].setValue('');
    component.addForm.controls['year'].setValue('');
    component.addForm.controls['price'].setValue('');
    expect(component.addForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.addForm.controls['bookname'].setValue('abc');
    component.addForm.controls['author'].setValue('aada');
    component.addForm.controls['publishing'].setValue('text');
    component.addForm.controls['year'].setValue(2019);
    component.addForm.controls['price'].setValue(150);
    expect(component.addForm.valid).toBeTruthy();
  }));
});
