

function media(){
    alert("Calcule sua média escolar")
    const prova1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
    const prova2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));
    const prova3 = parseFloat(prompt("Digite a nota da terceira avaliação:"));
    const prova4 = parseFloat(prompt("Digite a nota da quarta avaliação:"));

    const calculo = (prova1 + prova2 + prova3 + prova4)/4

    if(calculo >=7 )
        {alert("Aluno Aprovado!")}
    else if (calculo >=5)
        {alert("Aluno de recuperação!")}
    else 
    {alert("Aluno reprovado!!")}
}

document.getElementById("media").addEventListener("click", media);