const btn = document.getElementById("btn");

btn.onclick = () => {
    let nome = document.getElementById("nome");
    let lista = document.getElementById("lista").innerHTML;
    let nomes = document.getElementById("nomes").innerHTML;
     
    if(nome.value != ""){
        lista += `<li>${nome.value}</li>`;
        document.getElementById("lista").innerHTML = lista;

        nomes = nomes + nome.value;
        document.getElementById("nomes").innerHTML = `${nomes}, `;

        nome.focus();
        nome.value = "";
    }else {
        alert("Digite um nome");
    }
}