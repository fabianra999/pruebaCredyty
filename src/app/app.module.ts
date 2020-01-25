import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { from } from 'rxjs';

// Import routes
import { ROUTES } from './app-routing.module';

// Import Service
import { NytimesService } from './services/nytimes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    NytimesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
