let marcador = document.querySelectorAll('button');
let vez = document.querySelector('#vezDo');
let resultado = [];
recarregarPage.addEventListener('click', ()=> location.reload())
let caixa = document.querySelector('.msgVit');


marcador.forEach(element => {
    element.addEventListener('click', () => {
        if (element.textContent === "") {
            checandoResultado(marcarUm(element));
        }
    }
    );
});

function checandoResultado(retorno) {
    if (retorno[0] === 'x' && retorno[1] === 'x' && retorno[2] === 'x' ||
        retorno[3] === 'x' && retorno[4] === 'x' && retorno[5] === 'x' ||
        retorno[6] === 'x' && retorno[7] === 'x' && retorno[8] === 'x' ||
        retorno[0] === 'x' && retorno[3] === 'x' && retorno[6] === 'x' ||
        retorno[1] === 'x' && retorno[4] === 'x' && retorno[7] === 'x' ||
        retorno[2] === 'x' && retorno[5] === 'x' && retorno[8] === 'x' ||
        retorno[0] === 'x' && retorno[4] === 'x' && retorno[8] === 'x' ||
        retorno[6] === 'x' && retorno[4] === 'x' && retorno[2] === 'x'  ){
        vencedor.innerHTML = `<span style='color:red;'>X</span>`;
        caixa.style.display = 'flex';
    }
    else if (
        retorno[0] === 'o' && retorno[1] === 'o' && retorno[2] === 'o' ||
        retorno[3] === 'o' && retorno[4] === 'o' && retorno[5] === 'o' ||
        retorno[6] === 'o' && retorno[7] === 'o' && retorno[8] === 'o' ||
        retorno[0] === 'o' && retorno[3] === 'o' && retorno[6] === 'o' ||
        retorno[1] === 'o' && retorno[4] === 'o' && retorno[7] === 'o' ||
        retorno[2] === 'o' && retorno[5] === 'o' && retorno[8] === 'o' ||
        retorno[0] === 'o' && retorno[4] === 'o' && retorno[8] === 'o' ||
        retorno[6] === 'o' && retorno[4] === 'o' && retorno[2] === 'o'  
        ){
            vencedor.innerHTML = `<span style='color:blue;'>O</span>`;
            caixa.style.display = 'flex';
    }
}
function marcarUm(element) {
    if (vez.textContent === "X") {
        resultado[parseInt(element.value)] = 'x';
        vez.innerHTML = `<span id="vezDo" style='color:blue;'>O</span>`;
        element.innerHTML = '<button class="box" style="color:red;">X</button>';
    }
    else{
        resultado[parseInt(element.value)] = 'o';
        vez.innerHTML = `<span id="vezDo" style='color:red;'>X</span>`;
        element.innerHTML = '<button class="box" style="color:blue;">O</button>'
    }
    return resultado;
}
