var numero1 = prompt ("Digite um número positivo: ");
var numero2 = prompt("Digite o segundo positivo: ");

alert ("O resultado da divisao e " + dividir(numero1, numero2));

function dividir(a, b) {
    if(b > 0 && a > 0) {
        return a / b;
    }

    else if (b == 0 ){
        return alert ("Não é possível dividir por zero");
    }
    else{
        return alert ("Os numeros digitados nao sao positivos");
    }
   
  
}