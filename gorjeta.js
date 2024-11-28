

function gorjeta(){
    alert("Bem-vindo a calculadora de gorjetas")
    let opcao = parseInt(prompt("Qual o seu nível de satisfação? \n 1-Bom \n 2-ótimo \n 3-Excelente"))
    var valorconta = parseInt(prompt("Qual o valor da conta?"))
    switch (opcao){
        case 1:
            let calculo1 = valorconta * (10/100)
            alert(" O serviço foi: Bom \n O valor da conta foi:" + valorconta + "\n O valor da gorjeta é:" + calculo1)
        
        case 2:
            let calculo2 = valorconta * (15/100)
            alert(" O serviço foi: ótimo \n O valor da conta foi:" + valorconta + "\n O valor da gorjeta é:" + calculo2)
       
        case 3:
            let calculo3 = valorconta * (20/100)
            alert(" O serviço foi: excelente \n O valor da conta foi:" + valorconta + "\n O valor da gorjeta é:" + calculo3)
    }
}

document.getElementById("gorjeta").addEventListener("click", gorjeta);