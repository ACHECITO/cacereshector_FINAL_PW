// Inicializar EmailJS
emailjs.init("BEaU1boUFZANUY4wV"); // Reemplaza con tu ID de usuario de EmailJS

document.getElementById('sendButton').addEventListener('click', function () {
    const name = document.getElementById('employeeName').value.trim();
    const salary = document.getElementById('salary').value.trim();
    const observation = document.getElementById('observation').value.trim();

    if (!name || !salary || !observation) {
        alert("Por favor, complete todos los campos antes de enviar.");
        return;
    }

    const emailParams = {
        employee_name: name,
        employee_salary: salary,
        employee_observation: observation
    };

    emailjs.send("service_acsuqgc", "template_butyp3e", emailParams)
        .then(() => {
            alert(`El formulario fue enviado correctamente por ${name}.`);
        })
        .catch(error => {
            console.error("Error al enviar el correo:", error);
            alert("Ocurrió un error al enviar el formulario. Intente nuevamente.");
        });
});

// Botón para volver a esta misma página
document.getElementById('reloadButton').addEventListener('click', function () {
    window.location.reload(); // Recarga la página actual
});

// Botón para ir a página2.html
document.getElementById('nextPageButton').addEventListener('click', function () {
    window.location.href = "pagina2 (1).html"; // Redirige a pagina2.html
});
