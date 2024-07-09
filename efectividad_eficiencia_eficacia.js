function calcularEfectividadEficienciaEficacia() {
    const resultadoObtenido = parseFloat(document.getElementById("resultado_obtenido").value);
    const resultadoEsperado = parseFloat(document.getElementById("resultado_esperado").value);
    const recursosUsados = parseFloat(document.getElementById("recursos_usados").value);
    const recursosPrevistos = parseFloat(document.getElementById("recursos_previstos").value);
    const resultadoElement = document.getElementById("resultado");

    if (isNaN(resultadoObtenido) || isNaN(resultadoEsperado) || isNaN(recursosUsados) || isNaN(recursosPrevistos)) {
        resultadoElement.textContent = "Por favor, ingrese números válidos.";
        resultadoElement.style.color = "red";
        return;
    }

    const eficacia = (resultadoObtenido / resultadoEsperado) * 100;
    const eficiencia = (recursosPrevistos / recursosUsados) * 100;
    const efectividad = (eficacia * eficiencia) / 100;

    resultadoElement.innerHTML = `
        Eficacia: ${eficacia.toFixed(2)}%<br>
        Eficiencia: ${eficiencia.toFixed(2)}%<br>
        Efectividad: ${efectividad.toFixed(2)}%
    `;
    resultadoElement.style.color = "green";
}
