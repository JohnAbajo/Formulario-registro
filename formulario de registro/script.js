// script.js

// Obtener los elementos del formulario
var form = document.getElementById("form");
var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirm-password");

// Obtener los elementos de error
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var passwordError = document.getElementById("password-error");
var confirmPasswordError = document.getElementById("confirm-password-error");

// Función para validar el formulario
function validateForm() {
    
    // Obtener los valores de los campos
    var nameValue = name.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var confirmPasswordValue = confirmPassword.value.trim();

    // Variables para indicar si hay errores
    var nameValid = true;
    var emailValid = true;
    var passwordValid = true;
    var confirmPasswordValid = true;

    // Validar el nombre
    if (nameValue === "") {
        // El nombre está vacío
        nameError.textContent = "Por favor, ingresa tu nombre";
        nameValid = false;
    } else {
        // El nombre es válido
        nameError.textContent = "";
        nameValid = true;
    }

    // Validar el correo electrónico
    if (emailValue === "") {
        // El correo electrónico está vacío
        emailError.textContent = "Por favor, ingresa tu correo electrónico";
        emailValid = false;
    } else if (!isEmail(emailValue)) {
        // El correo electrónico no tiene el formato correcto
        emailError.textContent = "Por favor, ingresa un correo electrónico válido";
        emailValid = false;
    } else {
        // El correo electrónico es válido
        emailError.textContent = "";
        emailValid = true;
    }

    // Validar la contraseña
    if (passwordValue === "") {
        // La contraseña está vacía
        passwordError.textContent = "Por favor, ingresa tu contraseña";
        passwordValid = false;
    } else if (passwordValue.length < 8) {
        // La contraseña es muy corta
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres";
        passwordValid = false;
    } else {
        // La contraseña es válida
        passwordError.textContent = "";
        passwordValid = true;
    }

    // Validar la confirmación de la contraseña
    if (confirmPasswordValue === "") {
        // La confirmación de la contraseña está vacía
        confirmPasswordError.textContent = "Por favor, confirma tu contraseña";
        confirmPasswordValid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        // La confirmación de la contraseña no coincide con la contraseña
        confirmPasswordError.textContent = "Las contraseñas no coinciden";
        confirmPasswordValid = false;
    } else {
        // La confirmación de la contraseña es válida
        confirmPasswordError.textContent = "";
        confirmPasswordValid = true;
    }

    // Retornar el resultado de la validación
    return nameValid && emailValid && passwordValid && confirmPasswordValid;
}

// Función para verificar si una cadena es un correo electrónico válido
function isEmail(string) {
    // Expresión regular para validar el formato del correo electrónico
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(string);
}                                                                                                                                           