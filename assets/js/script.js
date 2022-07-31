const texto = (index, nombreRamo) => `Ingrese nota ${index} [${nombreRamo}]`;

document.getElementById("nombre").innerHTML = prompt("Ingrese nombre:");
document.getElementById("carrera").innerHTML = prompt("Ingrese carrera:");

const tablaNotas = document.getElementById("notas");
for (let i = 0; i < tablaNotas.childElementCount; i++){
    const ramo = tablaNotas.children[i];
    let suma = 0;
    for (let j = 1; j < ramo.childElementCount - 1; j++){
        ramo.children[j].innerHTML = prompt(texto(j, ramo.children[0].innerText));
        suma += Number(ramo.children[j].innerText);
    }
    ramo.lastElementChild.innerHTML = (suma/3).toFixed(2);
}
