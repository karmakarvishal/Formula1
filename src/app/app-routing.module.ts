import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { LoginGuard } from './auth/login.guard';
import { GalleryComponent } from './gallery/gallery.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TempGalleryComponent } from './temp-gallery/temp-gallery.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomepageComponent },
  { path: 'contact', component: AboutpageComponent },
  { path: 'temp', component: TempGalleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
