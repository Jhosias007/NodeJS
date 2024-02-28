class User {
  //name: string;         CAMPO
  //lastName: string;     CAMPO
  //
  //constructor (name: string, lastName: string) {
  //    this.name = name;
  //    this.lastName = lastName;
  //    
  //}

  constructor(public name: string, public lastName: string) { // PROPIEDAD

  }

}

interface UserRepository {
  insert(user: User): User
  getAll(): User[]

}

class UserInfrastructure implements UserRepository {
  insert(user: User) {
      console.log(user);
      return user;
  }

  trace(user: User) {
      console.log(user);
  }

  getAll(): User[] {
      return [
          new User("Luis", "Lamas"),
          new User("Rosa", "Laque"),
      ]

  }
}

class UserApplication {
  userInfrastructure: UserRepository;

  constructor(userInfrastructure: UserRepository) {
      this.userInfrastructure = userInfrastructure;
  }

  addUser(user: User) {
      this.userInfrastructure.insert(user);
      // this.userInfrastructure.trace(); ya no sale el metodo trace pq no depende de la clase infr. sino de la repo.
  }
}

const userInfrastructure = new UserInfrastructure();
const userApplication = new UserApplication(userInfrastructure);

const user = new User("Jorge", "Avila");
userApplication.addUser(user);
