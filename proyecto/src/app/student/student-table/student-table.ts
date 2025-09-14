import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../student';

@Component({
  selector: 'app-student-table',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './student-table.html',
  styleUrls: ['./student-table.css'],
})
export class StudentTable {
  selectedStudent!: Student;

  studentList: Student[] = [
    {
      name: 'Juan',
      lastName: 'Perez',
      age: 24,
      email: 'juseanto@me.com',
      phone: 123,
      ppa: 4.7,
      activated: true,
      fechaPago: new Date(),
    },
    {
      name: 'Pedro',
      lastName: 'Gomez',
      age: 22,
      email: 'pedro@me.com',
      phone: 123,
      ppa: 4.5,
      activated: true,
      fechaPago: new Date(),
    },
    {
      name: 'Maria',
      lastName: 'Gomez',
      age: 22,
      email: 'maria@me.com',
      phone: 123,
      ppa: 4.5,
      activated: true,
      fechaPago: new Date(),
    },
    {
      name: 'Maria',
      lastName: 'Gomez',
      age: 22,
      email: 'maria@me.com',
      phone: 123,
      ppa: 4.5,
      activated: true,
      fechaPago: new Date(),
    },
    {
      name: 'Maria',
      lastName: 'Gomez',
      age: 22,
      email: 'maria@me.com',
      phone: 1234,
      ppa: 4.5,
      activated: true,
      fechaPago: new Date(),
    },
    {
      name: 'Maria',
      lastName: 'Gomez',
      age: 21,
      email: 'maria@me.com',
      phone: 3454,
      ppa: 4.5,
      activated: true,
      fechaPago: new Date(),
    },
  ];
  editStudent(student: Student) {
    console.log('Editando estudiante', student);
  }
}
