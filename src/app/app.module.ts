import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ApiService } from "./service/api.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UploadImageComponent } from './upload-image/upload-image.component';

import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    AddBookComponent,
    EditBookComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwPaginationModule
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
