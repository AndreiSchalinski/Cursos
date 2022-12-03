function escopo() {
    const form = document.querySelector('.form');

    const pessoas = [];

    function recebeEventoForm(evento) {

        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        })

        form.querySelector('.nome').value = '';
        form.querySelector('.sobrenome').value = '';
        form.querySelector('.peso').value = '';
        form.querySelector('.altura').value = '';

        document.querySelector('.resultado').innerHTML = `<p>Nome:${nome} - Sobrenome:${sobrenome} - Peso:${peso} - Altura:${altura}</p></br>`
        .concat(`<p>${JSON.stringify(pessoas)}</p>`);

    }

    

    form.addEventListener('submit', recebeEventoForm);
}

escopo();
