

function anobissexto(){
    alert("Bem-vindo ao Verificador de Ano Bissexto")
    const anouser = prompt("Qual ano você quer saber se é bissexto?")
    const ano = parseInt(anouser)

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        alert("Ano Bissexto!!");
    } else {
        alert("O ano não é bissexto");
    }
}

document.getElementById("bissexto").addEventListener("click", anobissexto);