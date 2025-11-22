const mensagem = document.getElementById("mensagem");

function calcular(event) {
  event.preventDefault();

  const valor1 = Number(document.getElementById("valor1").value);
  const valor2 = Number(document.getElementById("valor2").value);
  const condicional = document.getElementById("condicional").value;

  let resultado = "Erro";

  switch (condicional) {
    case "+":
      resultado = valor1 + valor2;
      break;
    case "-":
      resultado = valor1 - valor2;
      break;
    case "*":
      resultado = valor1 * valor2;
      break;
    case "/":
      resultado = valor1 / valor2;
      break;
  }

  mensagem.textContent = `Resultado: ${resultado}`;
}
