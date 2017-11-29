export class User
{
  public firstName : string;
  public lastName : string;
  public phoneNumber : number;
  public email : string;
  public password : string;


  constructor(firstName : string, lastName : string, phoneNumber : number, email : string, password : string)
  {
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this. phoneNumber=phoneNumber;
    this.password=password;
  }
}
