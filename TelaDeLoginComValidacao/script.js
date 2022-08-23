const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassord = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit');

    console.log(submitButton, inputEmail, inputPassord)

    //Login de teste: eve.holt@reqres.in
    //Senha para teste: cityslicka
    //Se o login e senha estiverem corretos deve-se receber o token de retorno QpwL5tke4Pnpja7X4
    if(submitButton){
        submitButton.addEventListener('click', (event) =>{
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassord.value,
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        })
    }
}

window.onload = init;