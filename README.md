#  Fatorial Recursivo

<p align="justify">
 A recursão é uma técnica em programação em que uma função chama a si mesma para resolver um problema. No caso de cálculo de fatorial, uma função pode ser escrita de forma recursiva, onde ela irá chamar a si mesma, decrementando o valor de n até chegar a 1, e multiplicando todos os valores retornados pelas chamadas recursivas (cujo os valores estão salvos no acumulador da função). O resultado final é o fatorial de n. Essa técnica é eficiente para o cálculo de fatorial, pois divide o problema em subproblemas menores e os resolve de forma incremental, até chegar ao resultado final.


<div align="center">
<strong>Expressão : n * fatorial(n-1)</strong>
</div><br>
<p align="justify">
A condição base é a parte da fórmula recursiva que define quando a recursão deve parar. No caso do cálculo de fatorial, a condição base é definida como:

<code>if(n == 0 || n==1){
  return 1; 
}
</code>
</p>

<h2>Exemplo</h2>
<p>Vamos considerar n = 7, ou seja, 7!</p>

<strong>Parte 1 : decrementando o N</strong>
<br>1º 7 * (7-1 = 6!) 
<br>2° 6 * (5-1 = 5!)
<br>3° 5 * (5-1 = 4!)
<br>4° 4 * (4-1 = 3!)
<br>5° 3 * (3-1 = 2!)
<br>6° 2 * (2-1 = 1!)

<strong>Parte 2 : Multiplicando o N pelos retornos recursivos da função (acumulador).</strong>
<br>6° 7 * 6! = 5040
<br>5° 6 * 5! = 720 
<br>4º 5 * 4! = 120
<br>3° 4 * 3! = 24
<br>2º 3 * 2! = 6
<br>1º 2 * 1! = 2


 **<a href="https://hochiminh1996.github.io/fat_recursive/fat/">💻 Clique aqui</a>**




</p>
