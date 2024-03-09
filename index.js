const formulario = document.querySelector('form');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = document.querySelector('#usuario').value;
    const correo = document.querySelector('#correo').value;
    const contrasena = document.querySelector('#contrasena').value;

    // Validar los datos
    // ...

    // Registrar al usuario
    // ...

    resultado.textContent = "¡Te has registrado correctamente!";
});
