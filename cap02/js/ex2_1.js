const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e)  => {
    const nome = form.inNome.value; // obtem o nome digitado no formulário
    resp.innerText = `Olá, ${nome}` // Exibe o valor do campo inNome
    e.preventDefault(); // impede o envio do formulário
})