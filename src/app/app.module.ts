import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './auth/login.guard';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TempGalleryComponent } from './temp-gallery/temp-gallery.component';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent,
    AboutpageComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    TempGalleryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
