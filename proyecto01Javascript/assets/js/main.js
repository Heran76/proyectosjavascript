let nombre = "Antonio";
let apellido = "Heredia Morante";
let edad = 47
let pais = "España";
let conocimiento = ["html","javascript","CSS"]

console.log(
    `
    Hola soy ${nombre} ${apellido} mi edad es ${edad} y mi pais es ${pais}
    tengo los siguientes conocimientos :  ${conocimiento[0]} ${conocimiento[1]} ${conocimiento[2]}
    
    `
)
edad = 50;
conocimiento.push("Boostrapp");


console.log("Ahora tengo " + edad + " años y he aprendido "+conocimiento[3])