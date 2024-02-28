class Animal1 {
  private raza: string;
  private color: string;

  constructor(pRaza: string, pColor: string) {
    this.raza = pRaza;
    this.color = pColor;
  }

  public obtenerDescripcion(): string {
    return "Raza: " + this.raza + " Color: " + this.color;
  }
}

const animal1 = new Animal1("Pastor alemán", "Beige");

console.log("animal", animal1);
console.log("descripción", animal1.obtenerDescripcion());