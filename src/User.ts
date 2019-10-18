import faker from "faker";
import { Mappable } from "./CustomMap";

// after importng interface Mappable we use 'implemements' to make the true source of the error
class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

export { User };
