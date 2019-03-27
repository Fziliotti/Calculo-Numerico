
//Função simplesinha para tentar achar um intervalo em que ocorre um "corte" no eixo x
//FALTA MELHORAR, SE QUISER DAR UM PULL REQUEST FICA AVONTADE kk
const testarIntervalo = (x, y , funcao) => {
    let naoAchou = true
    while (naoAchou) {
        if (funcao(x) * funcao(y) < 0) {
            naoAchou = false
            break
        }
        x = x + 0.1
        y = y + 0.1
    }
    return [x, y]
}

const bissecao = (fun, intervaloInicial, PRECISAO = 0.001, N=1000) => {
    let [a,b] = intervaloInicial //valores de a e b vindo do array passado como parametro
    let funA = fun(a) //guardar para futuras atribuições 

    while (N--) {
        let p = ((a + b)/ 2)
        let funP = fun(p)

        // condições de parada: 
        // - valor da função que iremos testar é 0 
        // - ou se a distancia dos dois pontos que estamos olhando na iteração já está com a precisão que desejamos
        if (funP === 0 ||  Math.abs((a-b)/2) < PRECISAO) 
            return p

        if ((funA * funP) > 0) {
            a = p
            funA = funP
        } else {
            b = p
        }
    }
}


(function(){
    const fn = (x) => Math.pow(x, 2) + Math.log(x)
    const intervaloInicial = testarIntervalo(0.1, 1, fn)
    const precisao = 0.001;
    const numeroIteracoes = 1000;
    const calcularConvoluccao = bissecao(fn, intervaloInicial, precisao, numeroIteracoes);

    console.log(`
****************************************************************************
    Calculando a convolução para a função fn = (x^2 + ln x),
    temos que o valor aproximado da raiz resulta em: ${calcularConvoluccao}
****************************************************************************
    `)
})()

