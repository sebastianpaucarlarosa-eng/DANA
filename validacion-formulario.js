function aplicarValidacion() {
 
    // ✅ Solo letras SIN tildes PERO SÍ permite ñ
    function soloLetrasSinTildes(event) {
        let valor = event.target.value;
 
        let limpio = valor
            .replace(/[^a-zA-ZñÑ\s]/g, "")   // ✅ incluye ñ, ❌ excluye tildes
            .replace(/\s{2,}/g, " ");        // evita espacios dobles
 
        if (valor !== limpio) {
            event.target.value = limpio;
        }
    }
 
    // ✅ Celular: solo números y debe empezar con 9
    function validarCelular(event) {
        let valor = event.target.value;
 
        valor = valor.replace(/[^0-9]/g, "");
 
        if (valor.length > 0 && valor[0] !== "9") {
            valor = "9" + valor.substring(1);
        }
 
        event.target.value = valor;
    }
 
    // 🔤 Nombre y Apellidos
    const camposLetras = ["element_1", "element_2", "element_3"];
 
    camposLetras.forEach(function (idCampo) {
        let input = document.getElementById(idCampo);
 
        if (input) {
            input.removeEventListener("input", soloLetrasSinTildes);
            input.addEventListener("input", soloLetrasSinTildes);
        }
    });
 
    // 📱 Celular
    let celular = document.getElementById("element_8");
 
    if (celular) {
        celular.removeEventListener("input", validarCelular);
        celular.addEventListener("input", validarCelular);
    }
}
 
// ✅ Necesario para DANA (carga dinámica)
setInterval(aplicarValidacion, 1000);