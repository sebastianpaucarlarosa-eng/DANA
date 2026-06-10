function aplicarValidacion() {

    // ✅ BLOQUEO EN TECLADO (solo letras sin tildes + ñ)
    function validarTeclaLetras(e) {
        let tecla = e.key;

        // Permitir teclas especiales
        if (
            tecla === "Backspace" ||
            tecla === "Tab" ||
            tecla === "ArrowLeft" ||
            tecla === "ArrowRight" ||
            tecla === "Delete" ||
            tecla === " "
        ) {
            return;
        }

        // Solo letras sin tildes + ñ
        if (!/^[a-zA-ZñÑ]$/.test(tecla)) {
            e.preventDefault();
        }
    }

    // ✅ LIMPIEZA (por si pegan texto)
    function limpiarTexto(e) {
        let valor = e.target.value;

        let limpio = valor
            .replace(/[^a-zA-ZñÑ\s]/g, "")
            .replace(/\s{2,}/g, " ");

        e.target.value = limpio;
    }

    // ✅ CELULAR - BLOQUEO TECLADO
    function validarTeclaNumero(e) {
        let tecla = e.key;

        if (
            tecla === "Backspace" ||
            tecla === "Tab" ||
            tecla === "ArrowLeft" ||
            tecla === "ArrowRight" ||
            tecla === "Delete"
        ) {
            return;
        }

        // Solo números
        if (!/^[0-9]$/.test(tecla)) {
            e.preventDefault();
        }
    }

    // ✅ LIMPIAR CELULAR + forzar que empiece en 9
    function limpiarCelular(e) {
        let valor = e.target.value;

        valor = valor.replace(/[^0-9]/g, "");

        if (valor.length > 0 && valor[0] !== "9") {
            valor = "9" + valor.substring(1);
        }

        e.target.value = valor;
    }

    // 🔤 CAMPOS TEXTO
    ["element_1", "element_2", "element_3"].forEach(function (id) {
        let input = document.getElementById(id);

        if (input && !input.dataset.validado) {
            input.addEventListener("keydown", validarTeclaLetras);
            input.addEventListener("input", limpiarTexto);
            input.dataset.validado = "true";
        }
    });

    // 📱 CELULAR
    let celular = document.getElementById("element_8");

    if (celular && !celular.dataset.validado) {
        celular.addEventListener("keydown", validarTeclaNumero);
        celular.addEventListener("input", limpiarCelular);
        celular.dataset.validado = "true";
    }
}

// ✅ IMPORTANTE para DANA
let intervalo = setInterval(function () {
    aplicarValidacion();

    if (document.getElementById("element_1")) {
        clearInterval(intervalo);
    }
}, 500);
