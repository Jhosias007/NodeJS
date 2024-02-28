const information = {
    address: "av. La Union 245"
}
information.address = "Jr. Alfonso 124"

class User {
    private readonly userId: string; // readonly hace un valor inmutable
    private name: string;
    private age: number;
    private email: string;

    constructor(userId: string, name: string, age: number, email: string) {
        this.userId = userId;
        this.name = name;
        this.age = age;
        this.email = email
        information.address = "calle Los Pescadores 121"
    }

    /* public register(userId: string) {
        this.userId = userId;
    } */

    public update(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

}


const user = new User("470a0180-4c2c-4632-9210-e31bd7f6b472", "Sergio", 18, "gio18@gmail.com");
//user.register("28a2b439-a964-4cc4-a484-fb7bf965da22");
user.update("Andre", 16, "andre20@gmail.com");

console.log(user);