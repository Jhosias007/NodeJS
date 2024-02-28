class UserInformationPersonal {
  name: string;
  lastName: string;

  constructor (name: string, lastName: string) {
      this.name = name;
      this.lastName = lastName;
  }

}

class UserSalary extends UserInformationPersonal {
  salary: number
  
  constructor (name: string, lastName: string, salary: number) {
      super(name, lastName);
      this.salary = salary;
  }
}

const userSalary = new UserSalary ("Sergio", "Hidalgo", 2000);

console.log("user salary: " + userSalary);
