const form = {
    password: document.querySelector('#password'),
}

function checkPasswordMatch (confirmInput)  {
    const password = form.password.value

    if (confirmInput.value !== password) {
        confirmInput.setCustomValidity('Passwords do not match')
    }
    else {
        confirmInput.setCustomValidity('')
    }
}
