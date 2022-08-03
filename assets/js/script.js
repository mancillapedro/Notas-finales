const getPromedio = (inputs) => (inputs.reduce((acc, current) => acc + Number(current.value), 0) / inputs.length).toFixed(2)
const $ = (_) => document.querySelector(_)
const idsRows = ['html', 'css', 'javascript']

$("#nombre").innerHTML = prompt("Ingrese nombre:");
$("#carrera").innerHTML = prompt("Ingrese carrera:");

idsRows.forEach(id => {
    const inputsById = [...$(`#${id}`).elements]
    const showPromedio = $(`#promedio-${id}`)
    showPromedio.textContent = `Promedio de ${id}`
    inputsById.forEach((input, i) => {
        input.value = ''
        input.placeholder = `Ingrese ${i + 1}º nota de ${id}`
        input.type = "number"
        input.step = 0.1
        input.min = 0
        input.max = 7
        input.addEventListener('input', () => showPromedio.textContent = getPromedio(inputsById))
    })
})