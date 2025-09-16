import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../student';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-form',
  imports: [CommonModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  @Output() addStudentEvent = new EventEmitter<Student>();

  formStudent: Student = {
    name: '',
    lastName: '',
    age: 0,
    email: '',
    phone: 0,
    ppa: 0,
    address: '',
    activated: false,
    fechaPago: new Date(),
  };

  addStudent() {
    console.log('Agregando estudiante' + this.formStudent);
    //this.sendStudent = Object.assign({}, this.formStudent);
    //Para copiiar los valores
    this.addStudentEvent.emit(this.formStudent);
  }
}
