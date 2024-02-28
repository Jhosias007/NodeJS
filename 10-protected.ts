// modificador de acceso privated hace que solo sea accesible el campo en la clase declarada
// modificador de acceso protected hace que solo sea accesible el campo en la clase declarada y la primera heredada
// modificador de acceso readonly hace que el campo reciba su valor unicamente al inicio de la clase o en el constructor
// modificador de acceso public hace que el campo sea accesible desde cualquier lado
class User {
  readonly userId: string = "1d0e2ca5-4e2f-4b2c-9470-9fdc4839f2ba";
  protected password: string = ":50B3gHB3c(~";
}

class UserDeveloper extends User {
  getUserId () {
      return this.userId;
  }
  
  compare (password: string) {
      this.match(password, this.password)
  }

  match (password: string, passwordCipher: string) {
      return false
  }
}

const userDeveloper = new UserDeveloper ();
console.log(userDeveloper.getUserId());
