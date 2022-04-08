const btn = document.getElementById("btn");

btn.onclick = () => {
    let nome = document.getElementById("nome");
    let lista = document.getElementById("lista").innerHTML;
     
    if(nome.value != ""){
        lista += `<li>${nome.value}</li>`;
        document.getElementById("lista").innerHTML = lista;
        nome.focus();
        nome.value = "";
    }else {
        alert("Digite um nome");
    }
}