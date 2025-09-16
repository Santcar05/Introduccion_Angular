import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentTable } from './student/student-table/student-table';
import { StudentDetail } from './student/student-detail/student-detail';

@Component({
  selector: 'app-root',
  //Importar las nuevas clases de las componentes
  imports: [StudentTable, StudentDetail],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  //Modelo y controlador
  protected readonly title = signal('proyecto');
}
