import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ApartementsComponent } from './apartments/apartments.component';
import { DetailComponent } from './apartments/detail.component';
import { FlatComponent } from './apartments/flat.component';

import { ApartmentsService } from './services/apartments.service';


const appRoutes: Routes = [
  { path: '', component: ApartementsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'flat/:id', component: FlatComponent }
];

@NgModule({
  declarations: [
    ApartementsComponent,
    DetailComponent,
    FlatComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ApartmentsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
