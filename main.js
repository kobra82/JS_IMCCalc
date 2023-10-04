const mask = document.querySelector(".mask");
const inputs = document.querySelectorAll("input");
inputs[0].focus();

function calcola() {
  let peso = Number(inputs[0].value);
  let altezza = Number(inputs[1].value);
  let imc = (peso / altezza ** 2).toFixed(2);
  let output = document.createElement("p");
  let text = "L'imc, su questo input è: " + imc;
  output.append(text);

  if (isFinite(imc) == true && isNaN(imc) == false) {
    if (mask.children[2] == undefined) {
      mask.appendChild(output);
    } else {
      mask.children[2].replaceWith(output);
    }
  } else if (mask.children[2] != undefined) {
    mask.lastChild.remove();
  }
}

inputs[0].addEventListener("change", calcola);
inputs[1].addEventListener("change", calcola);
