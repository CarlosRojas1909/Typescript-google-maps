import faker from "faker";
import { Mappable } from "./CustomMap";

class Company implements Mappable {
  companyName: string;
  catchPhase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `
    <div>
    <h2>Company Name: ${this.companyName}</h2>
    <h3>Catchphrase: ${this.catchPhase}</h3>
    </div>
    `;
  }
}

export { Company };
