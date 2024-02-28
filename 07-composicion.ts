class UserInformationPersonal2 {
  name: string;
  lastName: string;

  constructor(name: string, lastName: string) {
      this.name = name;
      this.lastName = lastName;
  }
}

class UserPeruvian extends UserInformationPersonal2 {
  nationality: string = "peruvian";
}

class UserSalary2 {
  salary: number
  userInformationPersonal: UserInformationPersonal2

  constructor(name: string, lastName: string, salary: number) {
      this.userInformationPersonal = new UserInformationPersonal2(name, lastName)
      //super(name, lastName);
      this.salary = salary;
  }
}

const userSalary2 = new UserSalary("Sergio", "Hidalgo", 2000);

console.log("user salary: " + userSalary);