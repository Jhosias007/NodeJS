class Animal {
  raza: string
  color: string

  constructor (raza: string, color: string = "melon") {
      this.raza = raza;
      this.color = color;
  }

  descripcion () {
      return "raza: " + this.raza;
  }

}

class Mamifero extends Animal{
  tipo: string;

  constructor (raza: string, tipo: string) {
      super(raza, "jaspeado");
      this.tipo = tipo;
  }

}

const mamifero = new Mamifero ("chihuagua", "terrestre");

console.log(mamifero);
//console.log(mamifero.descripcion());






