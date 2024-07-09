function calcularEfectividadEmpresarial() {
    const objetivosCumplidos = parseFloat(document.getElementById("objetivos_cumplidos").value);
    const objetivosTotales = parseFloat(document.getElementById("objetivos_totales").value);
    const resultadoElement = document.getElementById("resultado");

    if (isNaN(objetivosCumplidos) || isNaN(objetivosTotales)) {
        resultadoElement.textContent = "Por favor, ingrese números válidos.";
        resultadoElement.style.color = "red";
        return;
    }

    const efectividad = (objetivosCumplidos / objetivosTotales) * 100;

    resultadoElement.textContent = `Efectividad Empresarial: ${efectividad.toFixed(2)}%`;
    resultadoElement.style.color = "green";
}
