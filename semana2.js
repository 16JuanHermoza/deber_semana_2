function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementsByName('fecha_nacimiento')[0].value);
    const fechaActual = new Date();
    let edadAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let edadMeses = fechaActual.getMonth() - fechaNacimiento.getMonth();
    let edadDias = fechaActual.getDate() - fechaNacimiento.getDate();
    if (edadDias < 0) {
        edadMeses--;
        const ultimoMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0);
        edadDias += ultimoMes.getDate();
    }
    if (edadMeses < 0) {
        edadAnios--;
        edadMeses += 12; 
    }
    const totalHoras = Math.floor((fechaActual - fechaNacimiento) / (1000 * 60 * 60));
    document.getElementById('resultadoEdad').innerText = 
        `Han pasado ${edadAnios} años, ${edadMeses} meses y ${edadDias} días, que es ${totalHoras} horas desde la fecha de nacimiento.`;
}
function verificarCedula() {
    const cedula = document.getElementsByName('cedula')[0].value;
    const regexCedula = /^[0-9]{10}$/;
    if (regexCedula.test(cedula)) {
        document.getElementById('resultadoCedula').innerText = "La cédula es válida.";
    } else {
        document.getElementById('resultadoCedula').innerText = "La cédula no es válida. Debe tener 10 dígitos.";
    }
}
function calcular() {
    calcularEdad();
    verificarCedula();
}