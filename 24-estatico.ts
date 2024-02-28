class Database {
  static protocol: string = "http://";

  static getConection(host: string, username: string, password: string) {
      return `${this.protocol}${host}/${username}:${password}`
  }

  // getProtocol(): string {
  //     return this.protocol
  // }
}

//const database = new Database()
//console.log(database.getConection("localhost", "jperez", "12345"))

console.log(Database.getConection("localhost", "jperez", "12345"))

