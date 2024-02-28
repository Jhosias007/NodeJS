interface PatientEssential {
  id: string;
  name: string;
  lastname: string;
  email: string;
}

// interface PatientUpdate {
//     name: string;
//     lastname: string;
// }

type PatientProperties = Required<PatientEssential>
type PatientPropertiesUpdate = Partial<Omit<PatientEssential, "id email">>

class Patient {
  private id: string;
  private name: string;
  private lastname: string;
  private email: string;

  constructor(properites: PatientProperties) {
      this.id = properites.id;
      this.name = properites.name;
      this.lastname = properites.lastname;
      this.email = properites.email;
  }

  update(updateFields: PatientPropertiesUpdate) {
      Object.assign(this, updateFields);
  }
}

const properties: PatientProperties = { id: "abcd", name: "Juan", lastname: "Perez", email: "jperez@correo.com" }
const patient = new Patient(properties)
console.log(patient)

const updateFields: PatientPropertiesUpdate = {lastname: "Salinas"}
patient.update(updateFields)
console.log(patient)
