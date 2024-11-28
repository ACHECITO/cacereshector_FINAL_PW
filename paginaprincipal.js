// Función para saludar al usuario e imprimir su nombre
function greetUser() {
    const name = document.getElementById("nameInput").value;

    if (name) {
        document.getElementById("greetingMessage").textContent = `¡Bienvenido, ${name}!`;
        document.getElementById("pageDescription").textContent = "Ahora puedes navegar a las diferentes secciones de la página usando los botones abajo.";
    } else {
        document.getElementById("greetingMessage").textContent = "Por favor ingresa tu nombre.";
    }
}
