function calcularROI() {
    const gananciaNeta = parseFloat(document.getElementById("ganancia_neta").value);
    const inversionTotal = parseFloat(document.getElementById("inversion_total").value);
    const resultadoElement = document.getElementById("resultado");

    if (isNaN(gananciaNeta) || isNaN(inversionTotal)) {
        resultadoElement.textContent = "Por favor, ingrese números válidos.";
        resultadoElement.style.color = "red";
        return;
    }

    const roi = (gananciaNeta / inversionTotal) * 100;

    resultadoElement.textContent = `Retorno sobre la Inversión (RIO): ${roi.toFixed(2)}%`;
    resultadoElement.style.color = "green";
}
