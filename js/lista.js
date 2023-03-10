let produtos = ["Vodka", "Limão", "Gelo"]
let lista = document.querySelector("#lista")

for(let r =0; r < produtos.length; r++){
    lista.innerHTML += `<li class="list-group-item">
                        ${produtos[r]}
                        </li>`
}

function adicionarProduto(){
    if(produto.value != ""){
        produtos.push(produto.value);
        lista.innerHTML += `<li class="list-group-item">
                        ${produto.value} <span onclick="autoDelet()">X</span>
                        </li>`
    produto.value = "";
    }else{
        alert("Digite um produto!")
    }
    }
    

function acharBotao(){
    if(event.key === "Enter"){
        if(produto.value != ''){
        adicionarProduto();
        }else{
        alert("Digite um produto!")
    }
}}

function autoDelete(){
    event.target.offsetParent.remove()
}