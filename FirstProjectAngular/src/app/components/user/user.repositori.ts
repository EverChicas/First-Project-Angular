
export interface UserRepositori{
  Id :number,
  Nombre: string,
  Apellidos: string,
  Nick: string,
  Email: string,
  Contrasenia: string,
  Tipo: UserType
}

export enum UserType {
  Administrador,
  Cliente,
  Tecnico
}
