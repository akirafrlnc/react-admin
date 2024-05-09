import { Role } from "./role";
export class User {

  public id: number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public role:Role =  new Role();

  constructor(
    id: number = 0,
    first_name: string = '',
    last_name: string = '',
    email: string = ''
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
  }

get name() {
	return this.first_name + ' ' + this.last_name;
}
}
