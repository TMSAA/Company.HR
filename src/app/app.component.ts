import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pantallas/login/login.component';
import { ApiService } from '../app/services/api.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoginComponent],
    standalone: true,
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
