function calcularIMC() {
 
    const pesoInput = document.getElementById('peso').value;
    const alturaInput = document.getElementById('altura').value;
    const resultadoDiv = document.getElementById('resultado');


    if (pesoInput === "" || alturaInput === "") {
        resultadoDiv.innerHTML = "Por favor, preencha todos os campos!";
        return;
    }

    let peso = parseFloat(pesoInput);
    let altura = parseFloat(alturaInput);

    
    if (altura > 3) {
        altura = altura / 100;
    }

    
    const imc = peso / (altura * altura);
    let classificacao = "";
    let corClasse = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        corClasse = "amarelo";
    } else if (imc < 25) {
        classificacao = "Peso normal";
        corClasse = "verde";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
        corClasse = "amarelo";
    } else {
        classificacao = "Obesidade";
        corClasse = "vermelho";
    }

    resultadoDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)}<br><br><span class="${corClasse}">${classificacao}</span>`;
}