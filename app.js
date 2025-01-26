// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya está ingresado en la lista, por favor no lo ingreses nuevamente.`);
        return;
    }

    amigos.push(nombreAmigo);

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();

}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if(amigos.length === 0) {
        alert("No se ha ingresado ningún nombre. Por favor, ingresa uno.");
        return;
    }

    const indiceAleatorio =Math.floor(Math.random()*amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`;

}