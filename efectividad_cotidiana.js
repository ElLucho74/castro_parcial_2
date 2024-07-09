function calcularEfectividad() {
    const tareasCompletadas = parseFloat(document.getElementById("tareas_completadas").value);
    const tareasPendientes = parseFloat(document.getElementById("tareas_pendientes").value);
    const resultadoElement = document.getElementById("resultado");

    if (isNaN(tareasCompletadas) || isNaN(tareasPendientes)) {
        resultadoElement.textContent = "Por favor, ingrese números válidos.";
        resultadoElement.style.color = "red";
        return;
    }

    const totalTareas = tareasCompletadas + tareasPendientes;
    const efectividad = (tareasCompletadas / totalTareas) * 100;

    resultadoElement.textContent = `Efectividad Cotidiana: ${efectividad.toFixed(2)}%`;
    resultadoElement.style.color = "green";
}
