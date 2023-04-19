
var variavel; 

variavel = 3 + 3;

alert(variavel);

var resultadoMultiplicacao = multiplique(10, 50);

/*Manipulando a Árvore DOM a fim de exibir, dentro da DIV declarada no HTML, o resultado da multiplicação
 juntamente com o seu texto inicial*/
var divLocal = document.getElementById('exibe_resultado');
/*
Neste ponto a variavel divLocal é um objeto que representa a div declarada no HTML.
Sendo um objeto é possível acessar seus atributos, como innerHTML, precedido do nome do objeto seguido de um '.'
*/
divLocal.innerHTML += resultadoMultiplicacao;

function multiplique(numero1, numero2) {

	var resultado = 0;

	resultado = numero1 * numero2;

	return resultado;

}
