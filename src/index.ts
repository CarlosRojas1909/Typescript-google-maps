import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
const user = new User();

// console.log("instance of a user", user);

const company = new Company();
// console.log("instance of company", company);

const customMap = new CustomMap("map");
// console.log("instance of customMap", customMap);

customMap.addMarker(user);
customMap.addMarker(company);
