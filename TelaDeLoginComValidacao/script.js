const init = () => {
//Bloco validador de Login--------------------------------------------------------------------------------
    const validateEmail = (event)=>{
        const input = event.currentTarget;
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        const emailTest = regex.test(input.value);
        
        if(!emailTest){
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        }else{
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }


    }

    const validatePassword = (event) =>{
        const input = event.currentTarget;

        if(input.value.length < 8){
            submitButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        }else{
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }
//---------------------------------------------------------------------------------------------------------

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassord = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit');

    inputEmail.addEventListener('input', validateEmail);
    inputPassord.addEventListener('input', validatePassword);

    const errorHandler = () =>{
        submitButton.classList.remove('success');
        submitButton.classList.add('error');
        submitButton.textContent = "Error :("
    };

    const successHandler = () =>{
        submitButton.classList.remove('error');
        submitButton.classList.add('success');
        submitButton.textContent = "Success!!!"
    }

    console.log(submitButton, inputEmail, inputPassord)

    //Login de teste: eve.holt@reqres.in
    //Senha para teste: cityslicka
    //Se o login e senha estiverem corretos deve-se receber o token de retorno QpwL5tke4Pnpja7X4
    if(submitButton){
        submitButton.addEventListener('click', (event) =>{
            event.preventDefault();

            submitButton.textContent = "...Loading"

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
                if (response.status !== 200){
                    return errorHandler();
                }
                successHandler();
            }).catch(() =>{
                errorHandler();
            })
        })
    }
}

window.onload = init;