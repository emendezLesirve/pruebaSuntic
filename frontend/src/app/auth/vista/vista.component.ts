import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
   // this.router.navigateByUrl('/auth/register');
  }

  returnV(): void {
    this.router.navigateByUrl('/auth/register');
  }

}
