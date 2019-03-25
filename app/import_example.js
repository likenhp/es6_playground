import addToDom from "./helpers"; //import from export default
//import { add as plus, subtract } from "./math"; <== import from non-default export
import doMath, {add, subtract} from "./math";

addToDom("This was imported from a dif file!");


addToDom(`22 + 20 = ${doMath(22, "+", 20)}`);

addToDom(`50 + 82 = ${add(50, 82)}`);

console.log(doMath);