import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from './_helpers/auth.guard';
import { UploadImageComponent } from "./upload-image/upload-image.component";
import { PreloadAllModules } from '@angular/router';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const bookModule = () => import('./book/book.module').then(x => x.BookModule);

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'book' },
  { path: 'upload', component: UploadImageComponent, canActivate: [AuthGuard] },
  { path: 'book', loadChildren: './book/book.module#BookModule' },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
