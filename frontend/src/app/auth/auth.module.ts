import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { VistaComponent } from './vista/vista.component';

import { ReactiveFormsModule } from '@angular/forms';

//import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, VistaComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule,
  //  FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]

})
export class AuthModule { }
