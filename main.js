document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form deposito');
    const campoA = document.getElementById('campo-A');
    const campob = document.getElementById('campo-B');
    const errorMensage = document.querySelector('.error-mensage');
    const SuccessMensage = document.querySelector('.success-mesage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        //Resetando a mensagem de error e sucesso
        errorMessage.Style.display = 'none';
        successMessage.Style.diplay = 'none';

        //validando se os campos estão preenchido com números
        if (campoA.value === '' || campoB.value === ''){
            errorMessage.innerText = 'preencha este campo.';
            errorMessage.Style.display = 'block';
            return;
        }
    
      //Convertendo os valores dos campos para número inteiros
        const numA = parseInt(campoA.value);
        const numB = parseInt(campoB.value);
        
        //validando se os campos estão das faixas pespecificas
        if (numA < 0 || numA > 9) {
            errorMessage.Style.display = 'block';
            return;
        }

        if (numB < 1 || numB > 11 || numB <= numA){
            errorMessage.innerText = '0 número do campo B deve ser maior que o número da campo A.';
            errorMessage.Style.display = 'block';
            return;        
        }
        
        //se todas a validações passaram exibie de sucesso
        successMessage.innerText = 'parabéns! Esta correto';
        successMessage.Style.display = 'block';
    });

    //adicionando eventos para limpar a mensagem de sucesso ao alterar os campos
    campoA.addEventListener('input', function () {
        successMessage.Style.display = 'none';
        errorMensage.Style.display = 'none';    
    });

    campoB.addEventListener('input', function() {
        successMessage.Style.display = 'none';
        errorMensage.Style.display = 'none';
    });
});


