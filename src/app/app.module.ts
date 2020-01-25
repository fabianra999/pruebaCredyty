import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { from } from 'rxjs';

// Importat Rutas
import { ROUTES } from './app-routing.module';

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
    RouterModule.forRoot(ROUTES, { useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
