class MedicBuilder {
  public name: string = "";
  public lastname: string = "";
  public cmp: string = "";
  public email: string = "";
  public specialty: string = "";
  public subSpecialty: string = "";

  addName(name: string): MedicBuilder {
      this.name = name;
      return this;
  }

  addCMP(cmp: string): MedicBuilder {
      this.cmp = cmp;
      return this;
  }

  addLastname(lastname: string): MedicBuilder {
      this.lastname = lastname;
      return this;
  }

  addEmail(email: string): MedicBuilder {
      this.email = email;
      return this;
  }

  addSpecialty(specialty: string): MedicBuilder {
      this.specialty = specialty;
      return this;
  }

  addSubSpecialtuy(subSpecialty: string): MedicBuilder {
      this.subSpecialty = subSpecialty;
      return this;
  }

  create(): Medic {
      return new Medic(this)
  }

}

class Medic {
  name: string;
  lastname: string;
  cmp: string;
  email: string;
  specialty: string;
  subSpecialty: string;


  constructor(properties: MedicBuilder) {
      this.name = properties.name;
      this.lastname = properties.lastname;
      this.cmp = properties.cmp
      this.email = properties.email;
      this.specialty = properties.specialty;
      this.subSpecialty = properties.subSpecialty;
  }
}

const builder = new MedicBuilder()

const medic = builder
  .addName("Jorge")
  .addLastname("Perez")
  .addEmail("jperez@correo.com")
  .addCMP("12345")
  .addSpecialty("Cardiologia")
  .addSubSpecialtuy("Cardiologia Geriatrica")
  .create()
