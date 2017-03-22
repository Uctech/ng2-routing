import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './Contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';


//custom module goes here
import {appRouting } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    appRouting
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
  
  ],
  providers:[

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }