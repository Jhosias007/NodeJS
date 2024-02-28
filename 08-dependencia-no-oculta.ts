class UserInformationPersonal {
  name: string;
  lastName: string;

  constructor(name: string, lastName: string) {
      this.name = name;
      this.lastName = lastName;
  }
}

class UserPeruvian extends UserInformationPersonal {
  nationality: string = "peruvian";
}

class UserSalary {
  salary: number
  userInformationPersonal: UserInformationPersonal

  constructor(userInformationPersonal: UserInformationPersonal, salary: number) {
      this.userInformationPersonal = userInformationPersonal;
      //this.userInformationPersonal = new UserInformationPersonal(name, lastName)
      //super(name, lastName);
      this.salary = salary;
  }
}

const userInformationPersonal = new UserInformationPersonal("Sergio", "Hidalgo");
const userSalary = new UserSalary(userInformationPersonal, 2000);

console.log("userSalary:", userSalary);