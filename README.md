# Formulario de Validación

Este repositorio contiene un formulario HTML básico con funcionalidad de validación utilizando JavaScript. El formulario consta de un campo de entrada para el nombre y un botón de enviar. La validación se realiza en tiempo real cuando el usuario intenta enviar el formulario.

## Uso

1. Clona este repositorio en tu máquina local o descarga los archivos `index.html`, `script.js` y `styles.css`.
2. Abre `index.html` en tu navegador web.

## Descripción de los archivos

### `index.html`

Este archivo contiene la estructura del formulario HTML. Incluye un campo de entrada para el nombre, un botón de enviar y enlaces a los archivos CSS y JavaScript necesarios.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Validación</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form id="formulario">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre">
        <span id="errorNombre" class="error"></span>
        <br>
        <button type="submit">Enviar</button>
    </form>

    <script src="script.js"></script>
</body>
</html>
```

### `script.js`

Este archivo contiene el código JavaScript que maneja la validación del formulario. 

```javascript
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
```

### `styles.css`

Este archivo contiene estilos CSS para el formulario y los mensajes de error.

```css
.error {
    color: red;
    font-size: 14px;
}
```

## Funcionamiento

- Cuando el usuario intenta enviar el formulario, se dispara un evento 'submit'.
- El código JavaScript previene el envío predeterminado del formulario utilizando `event.preventDefault()`.
- Luego, se valida el campo de nombre. Si tiene menos de 3 caracteres, se muestra un mensaje de error.
- Si la validación es exitosa, se limpia el mensaje de error y se muestra un mensaje de alerta con el nombre ingresado.
- Los estilos CSS en `styles.css` se aplican para mostrar mensajes de error en rojo y con un tamaño de fuente de 14px.


Este código puede ser útil para aquellos que deseen implementar una validación simple en formularios HTML utilizando JavaScript. Se puede adaptar y ampliar para cubrir diferentes tipos de validaciones y requisitos de formularios.
