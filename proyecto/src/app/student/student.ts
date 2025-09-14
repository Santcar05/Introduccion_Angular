//No se compila
//Define la estructura de una entidad, siempre publicos
// No puede tener constructor
//Se pierden otras ventajas de POO
// Los métodos siempre son abstractos
export interface Student {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phone: number;
  ppa: number;
  //Este atributo no es obligatorio
  address?: string;
  activated: boolean;
  fechaPago: Date;
}
