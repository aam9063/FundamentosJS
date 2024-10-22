/*
Pedir contraseña 
• Realiza un script que pida la contraseña de acceso a una página web y compruebe si es 
la misma que la almacenada en una variable. Si es correcta, le dará la bienvenida, sino
se la volverá a pedir.
*/

const contraseñaCorrecta = '12345'; // Contraseña almacenada

document.getElementById('accesoForm').addEventListener('submit', function(event) { // Se agrega un evento al formulario
    event.preventDefault(); // Evitar que se recargue la página
    let contraseñaIngresada = document.getElementById('password').value; // Obtener la contraseña ingresada
    let mensaje = document.getElementById('mensaje'); // Elemento donde se mostrará el mensaje

    if (contraseñaIngresada === contraseñaCorrecta) { // Comprobar si la contraseña ingresada es correcta
        mensaje.textContent = 'Bienvenido!';
        mensaje.style.color = 'green';
    } else { // Si la contraseña es incorrecta
        mensaje.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
        mensaje.style.color = 'red';
        document.getElementById('password').value = ''; // Limpiar el campo de contraseña
    }
});