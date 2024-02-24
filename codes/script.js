// Obtiene referencia al formulario y a los elementos relevantes dentro del formulario
var formulario = document.getElementById('formulario');
var nombreInput = document.getElementById('nombre');
var errorNombre = document.getElementById('errorNombre');

// Agrega un event listener para el evento 'submit' del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Realiza la validación del campo de nombre
    if (nombreInput.value.length < 3) {
        errorNombre.textContent = 'El nombre debe tener al menos 3 caracteres.';
    } else {
        errorNombre.textContent = ''; // Limpia el mensaje de error si la validación es exitosa
        // Aquí podrías enviar el formulario si la validación es exitosa
        alert('Formulario enviado correctamente con el nombre: ' + nombreInput.value);
    }
});
