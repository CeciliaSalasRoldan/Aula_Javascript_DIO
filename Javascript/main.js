
function button_clicked(){
    document.getElementById("clicked").innerHTML = "<b>Obrigado por clicar</b>";
     
    /*console.log(document.getElementById("clicked"));*/
}
function redirecionar(){
    window.open("https://www.google.com.br/"); /*Abre em outra aba */
    window.location.href = "https://www.google.com.br/";/*Redireciona */
}
function trocar(element){
    element.innerHTML = "Passe o mouse novamente";
    /*document.getElementById("mouseover").innerHTML = "Passe o mouse de novo";
    alert("Trocar texto?");*/
}
function voltar(element){
    element.innerHTML = "Passe o mouse aqui";
    /*document.getElementById("mouseover").innerHTML = "Passe o mouse aqui"*/
}
function load(){
    alert("Página carregada");
}
function funcaochange(elemento){
    console.log(elemento.value);
} 
/*function subt(s1, s2){
    return s1 - s2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if (idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

alert(subt(10, 5));
alert(setReplace("Hoje tem aula de Estrutura de Dados",
"Estrutura de Dados", "Arquitetura de Dados"));



var d = new Date();
alert(d.getDay());
alert(d.getMonth()+1);
;alert(d.getFullYear());


------------------------------

var count;
for (count = 0; count <= 5; count++){
    alert(count);
}

------------------------------

var count = 0;
while(count <= 7){
    console.log(count);
    count ++;
}

-------------------------------

var idade  = prompt("Qual a sua idade?\nAo entrar, você afirma ter mais de 18 anos! ");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}

--------------------------------

var fruta = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor:"roxa"}];
console.log(fruta);

---------------------------------

var lista = ["maça", "pera","laranja"];
lista.pop();
lista.push("uva");
console.log(lista.toString());
console.log(lista.join(" - "))

----------------------------------

var nome = "Cecilia Roldan";
var idade = 18;
var frase = "Japão é o melhor país do mundo.";
alert("Bem vinda " + nome + "!\n" + "Você tem: " + idade + " anos.");
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));*/