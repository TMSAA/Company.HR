import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pantallas/login/login.component';
import { ApiService } from '../app/services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Company.HR';
  isLogged: boolean = false;
  constructor(private api: ApiService) {}

  ngOnInit(): void  {
     console.log('ngOnInit ejecutado ✅');
    this.cargarEmpleados();
  }

  cargarEmpleados(){
    this.api.get('empleados/SeleccionarEmpleados')
      .subscribe({
        next: (data) => console.log(data),
        error: (err) => console.error('Error al cargar empleados', err)
      });
  }
  
}
