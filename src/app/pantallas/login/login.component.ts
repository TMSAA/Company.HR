import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  Acount: boolean = true
}
