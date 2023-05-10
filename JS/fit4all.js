let nombre = prompt("Bienvenido a Fit4All, ¿Cómo te llamas?");
let respuesta = prompt("¿Quieres calcular tus calorías?");
while (respuesta == "si"){
let objetivo = prompt(`Genial, ${nombre}. Por favor indica si tu objetivo es perder peso, mantener peso o ganar peso`);
let sexo = prompt("Ahora indica su sexo con H o M");
let edad = parseInt(prompt("También indica tu edad"));
let estatura = parseInt(prompt("Indica tu estatura en cm. Ejemplo: 180"));
let peso = parseInt(prompt("Por último indica tu peso actual"));


if(objetivo == "perder peso" && sexo == "H"){
    let deficit = calorias_base();
    alert(`${nombre}, asegúrate de consumir ${deficit - 500} calorías para lograr tu objetivo`);
    let repetir = prompt("Te gustaría hacer otro calculo?");
}
else if (objetivo == "perder peso" && sexo == "M"){
    let deficit = calorias_base();
    alert(`${nombre}, asegúrate de consumir ${deficit - 666} calorías al día para lograr tu objetivo :)`);
}
else if (objetivo == "mantener peso" && sexo == "H"){
    let mantenimiento = calorias_base()
    alert(`${nombre}, asegúrate de consumir ${mantenimiento} , calorías al día para lograr tu objetivo :)`); 
}
else if (objetivo == "mantener peso" && sexo == "M"){
    let mantenimiento = calorias_base();
    alert(`${nombre}, asegúrate de consumir ${mantenimiento - 166} calorías al día para lograr tu objetivo :)`);
}
else if (objetivo == "ganar peso" && sexo == "H"){
    let volumen = calorias_base();
    alert(`${nombre}, asegúrate de consumir ${volumen + 400} calorías al día para lograr tu objetivo :)`);
}
else if (objetivo == "ganar peso" && sexo == "M"){
    let volumen = calorias_base();
    alert(`${nombre}, asegúrate de consumir ${volumen - 166 + 400} calorías al día para lograr tu objetivo`);
}
else {
    alert("Ingresa datos válidos");
}


function calorias_base(){
    let resultado = (10 * peso) + (6.25 * estatura) - (5 * edad) + 5;
    return (resultado);
}

    let repetir = prompt("¿Te gustaría hacer otro cálculo?");
    if (repetir == "no"){
    alert(`Adiós ${nombre}`);
    break;
    }
}
alert("Ah bueno... Bye.");