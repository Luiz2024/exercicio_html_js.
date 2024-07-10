document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-deposito');
    const campoA = document.getElementById('campo-A');
    const campoB = document.getElementById('campo-B');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        //Resetando a mensagem de erro e sucesso
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        //validando se os campos estão preenchido com números
        if (campoA.value === '' || campoB.value === '') {
            errorMessage.innerText = 'preencha este campo.';
            errorMessage.style.display = 'block';
            return;
        }

        //Convertendo os valores dos campos para número inteiros
        const numA = parseInt(campoA.value);
        const numB = parseInt(campoB.value);

        //validando se os campos estão nas faixas especificas
        if (numA < 0 || numA > 9) {
            errorMessage.style.display = 'block';
            return;
        }

        if (numB < 1 || numB > 11 || numB <= numA) {
            errorMessage.innerText = 'O número do campo B deve ser maior que o número do campo A.';
            errorMessage.style.display = 'block';
            return;
        }

        //se todas a validações passarem, a exibir mensagem de sucesso
        successMessage.innerText = 'parabéns! Está correto.';
        successMessage.style.display = 'block';
    });

    //adicionando eventos para limpar a mensagem de sucesso ao alterar os campos
    campoA.addEventListener('input', function () {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none'; //ocultar mensagem de erro ao alterar o vampo A
    });

    campoB.addEventListener('input', function () {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none'; // acultar mensagem de erro ao alterar o campo B
    });
});
