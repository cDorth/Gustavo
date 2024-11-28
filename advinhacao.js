

function jogoAdivinhacao() {
    alert("Bem-vindo ao Jogo de Adivinhação!");
    const numeroadvinhar = Math.floor(Math.random() * 10) + 1;

    const numerocolocado = prompt("Digite um número entre 1 e 10:");
    const numero = parseInt(numerocolocado, 10);

    if (numero >= 1 && numero <= 10) {
        if (numero === numeroadvinhar) {
            alert("Parabéns, você acertou!");
        } else {
            alert(`Tente novamente! O número correto era ${numeroadvinhar}.`);
        }
    } else {
        alert("Por favor, insira um número válido entre 1 e 10.");
    }
}

document.getElementById("advinhacao").addEventListener("click", jogoAdivinhacao);