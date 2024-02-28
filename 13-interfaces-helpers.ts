// interface UserProperties {
//     userId: string,
//     name: string,
//     lastName: string,
//     age: number,
//     gender: boolean,
//     email: string,
//     tall: number
// }

interface UserEssential {
  userId: string,
  name: string,
  lastName: string,
  email: string
}

interface UserOptionals {
  age: number,
  gender: boolean,
  tall: number
}


class User {
  private readonly userId: string;
  private name: string;
  private lastName: string;
  private age: number;
  private gender: boolean;
  private readonly email: string;
  private tall: number;

  constructor(properties: Required<UserEssential> & Partial<UserOptionals>) {
      Object.assign(this, properties)
      //Object.assign({name: "Claudia", age: 34}, {name: "Luisa", lastName: "Tamayo"});
      // {name: "Luisa", lastName: "Tamayo", age: 34}

      // this.userId = properties.userId;
      // this.name = properties.name;
      // this.lastName = properties.lastName;
      // this.age = properties.age;
      // this.gender = properties.gender;
      // this.email = properties.email;
      // this.tall = properties.tall;
  }
}

// const properties: UserProperties = { userId: "b576746c-2c96-4871-93ac-241f99e81a4d", name: "Alicia", lastName: "Montes", age: 30, gender: false, email: "alicia@correo.com", tall: 180 };
const properties: Required<UserEssential> & Partial<UserOptionals> = { userId: "b576746c-2c96-4871-93ac-241f99e81a4d", name: "Alicia", lastName: "Montes", email: "alicia@correo.com", age: 32};
const user = new User(properties);
console.log(user);
