
document.querySelector("#num").focus();
//focando no campo desejado


document.querySelector("#btn").addEventListener("click", principal);
// adicionado um evento ao btn

// campo que irá realizar a validação do campo
function validacao_campo() {
    let campo = document.querySelector("#num").value;//busca o campo

    let resultado = document.getElementById("resultado");//busca a div

    // um input retorna 0 se estiver vazio. Se estiver preenchido, retorna o tamanho do número. Se tiver o digito 1 => 2. Se tiver 10 => o length conta 2 digitos

    if (!campo.length > 0) {
        // Se o tamanho não for maior que zero, significa que está vazio. Logo, temos que focar no elemento

        // estamos removendo a classe padrão de focus
        document.querySelector("#num").classList.remove("border-blue");

        document.querySelector("#num").classList.add("border-error");
        // vamos adicionar uma classe que tornará a borda vermelha, já que o campo não foi preenchido




        document.getElementById("num").focus();//foca o campo incorreto

        let p = document.createElement("p");//cria um p para registrar um msg de erro
        p.setAttribute("id", "p-error");// cria um id para o p criado
        p.innerText = "Campo preenchido incorretamente";//adicionamos um texto ao p


        if (!document.querySelector("#p-error")) {
            // Se não existir um campo #p-error, ele irá criar. 
            resultado.appendChild(p);
            return false; //retorna false, ou seja, que algo saiu errado
        }


    } else {
        if (document.querySelector("#p-error") || document.getElementsByClassName("border-error")[0]) {
            // se existir um #p-error, significa que o erro foi ativado anteriormente. Como posteriormente foi preenchido, temos que remover o p que constava um erro

            resultado.removeChild(document.querySelector("#p-error"))
            document.getElementsByClassName("border-error")[0].classList.remove("border-error");
        }
        return true;
    }
}

function fat_recursive(num) {
    if (num < 0) {
        return "Não existe fatorial de número negativo";
    } else
        if (num == 1 || num == 0) {// condição base para encerrar a recursividade
            return 1;
        } else {
            return num * fat_recursive(num - 1);
        }
}

function principal() {

    if (!validacao_campo()) {
        // se for false, ele chama a função validação novamente
        validacao_campo();
    } else {
        // se a função retornar true, significa que o campo foi preenchidocorretamente
        document.body.style.background = "black";// mundado o background


        // Se n existir a classe padrão border-blue, ele irá readicionar, já q ela foi removido se algo n foi preenchido anteriormente
        if (!document.getElementsByClassName("border-blue")[0]) {
            document.querySelector("#num").classList.add("border-blue");
        }

        let fat = fat_recursive(Number(document.querySelector("#num").value));
        // criamos uma variável que irá armazenar o resultado recursivo do fatorial que passamos via #num. Observe que optamos em passar o parâmetro buscando o valor no próprio html. Daria para fazer outro forma tb.

        let div = document.querySelector("#resultado"); //acessando a div do html



        // se não existir o #p-fatorial, ele vai criar o p e vai setar um valor dentro dele
        if (!document.querySelector("#p-fatorial")) {
            let p_fatorial = document.createElement("p");//criando um p por js
            p_fatorial.setAttribute("id", "p-fatorial");//adicionado um id ao p

            p_fatorial.innerHTML = `Fatorial de ${document.querySelector("#num").value}! = ${fat}`;

            div.appendChild(p_fatorial);//agora p é filho da nossa div
            document.querySelector("#num").focus();

        } else {

            // se já existir o elemento em html, apenas trocamos o valor dele. Evitando a criação de um elemento p para cada cálculo realizado. 

            document.querySelector("#p-fatorial").innerHTML = `Fatorial de ${document.querySelector("#num").value}! = ${fat}`;
            document.querySelector("#num").focus();

        }
    }


}