// Patron singleton solo hace que se cree una unica instancia de la clase
class Database {
    
  private host: string;
  private username: string;
  private password: string;

  static instance: Database

  private constructor(host: string, username: string, password: string) {
      this.host = host;
      this.username = username;
      this.password = password;
  }


  static createConnection(host: string, username: string, password: string): Database{
      if(!this.instance) {
          this.instance = new Database(host, username, password)
      }
      return this.instance;
  }
}

const connection1 = Database.createConnection("localhost", "Juan", "12345")
console.log(connection1)
const connection2 = Database.createConnection("localhost:5000", "Pepe", "54321")
console.log(connection2)
