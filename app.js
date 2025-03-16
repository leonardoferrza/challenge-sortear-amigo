let nomesAmigos = []; 

function adicionarAmigo() {
  let nomeAmigo = document.getElementById("amigo").value; 

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  nomesAmigos.push(nomeAmigo);
  document.getElementById("amigo").value = ""; 
  exibirAmigos();
}

function exibirAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < nomesAmigos.length; i++) {
    let itemLista = document.createElement("li");
    itemLista.textContent = nomesAmigos[i];
    listaAmigos.appendChild(itemLista);
  }
}

function sortearAmigo() {
  if (nomesAmigos.length === 0) {
    alert("Adicione amigos antes de sortear.");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * nomesAmigos.length);
  let amigoSorteado = nomesAmigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML = amigoSorteado;
}

