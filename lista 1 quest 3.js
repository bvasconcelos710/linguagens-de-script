const inputCelsius = document.querySelector("#input-celsius");

function converterEmFahrenheit(valCelsius) {
    let resultado = valCelsius * 1.8 + 32;
    return resultado;
}

function converterEmKelvin(valCelsius) {
    let resultado = parseInt(valCelsius) + 273;
    return resultado;
}
function exibirResultado(resultadoFahrenheit, resultadoKelvin) {
    const divFahrenheit = document.querySelector("#temp-fahrenheit");
    const divKelvin = document.querySelector("#temp-kelvin");

    divFahrenheit.textContent = resultadoFahrenheit;
    divKelvin.textContent = resultadoKelvin;
}
function valorNulo() {
    const divFahrenheit = document.querySelector("#temp-fahrenheit");
    const divKelvin = document.querySelector("#temp-kelvin");

    divFahrenheit.textContent = "";
    divKelvin.textContent = "";
}

inputCelsius.addEventListener("keyup", () => {
    const valCelsius = inputCelsius.value;

    if (valCelsius) {
        const resultadoFahrenheit = converterEmFahrenheit(valCelsius);
        const resultadoKelvin = converterEmKelvin(valCelsius);
        exibirResultado(resultadoFahrenheit, resultadoKelvin);
    } else {
        valorNulo();
    }
});