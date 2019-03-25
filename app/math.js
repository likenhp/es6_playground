export function add (x, y){
    return x + y;
}

export function subtract (x, y){
    return x - y;
}

export default (x, op, y)=>{
    switch(op){
        case "+": 
            return add(x,y);
        case "-":
            return subtract(x,y);
        default:
            return "IDK";
    }
}