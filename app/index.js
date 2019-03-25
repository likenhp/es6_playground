import { Person, SuperPerson } from "./person";

const david = new Person("David");
const davidLee = new SuperPerson("David Lee", "Caffeine Resistance");

david.greet();

davidLee.greet();
davidLee.saySuperPower();