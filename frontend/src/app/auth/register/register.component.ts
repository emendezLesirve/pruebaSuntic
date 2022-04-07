import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { UserI } from '../../models/user';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 // nameCtrl=new FormControl('',[Validators.required]);

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }
/*
  getName(event: Event) {
    event.preventDefault();
    console.log(this.nameCtrl.value);
  }*/

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  onRegister(form): void {

    this.authService.register(form.value).subscribe(res => {
        this.router.navigateByUrl('/auth/login');
        
    });
  }

}
