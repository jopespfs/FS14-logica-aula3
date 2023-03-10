let dias = document.getElementById("dia")
let mes = document.getElementById("mes")
let meses = ["Janeiro", "fevereiro", "março", "Abril", "Maio", "Junho", "Julho", "Agostos", "Setembro", "Outubro", "Novembro", "Dezembro"]
let anos = document.getElementById("ano")

for(let i =1;i <=31; i++){
    dias.innerHTML += "<option>"+i+"</option>"
}

// for(let i =1;i <=12; i++){
//     mes.innerHTML += "<option>"+i+"</option>"
// }

for(let i =0;i < meses.length; i++){
    mes.innerHTML += "<option>"+meses[i]+"</option>"
}

for(let i =2023;i >= 1900; i--){
    anos.innerHTML += "<option>"+i+"</option>"
}