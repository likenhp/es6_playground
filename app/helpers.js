import $ from "jquery";


export default function addToDom(text){
    const h1 = $("<h1>", {
        text: text
    });

    $("#root").append(h1);
}
//export defualt is the default for the file, can only have one default per a file