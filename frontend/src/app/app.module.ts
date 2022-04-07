import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { NavbarComponent } from './navbar/navbar.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatInputModule} from '@angular/material/input';
//import {MatButtonModule} from '@angular/material/button';
//import {MatCardModule} from '@angular/material/card';*/


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
   // NavbarComponent,
   // FlexLayoutModule,
    //MatFormFieldModule,
    //MatInputModule,
    //MatButtonModule,
    //MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
