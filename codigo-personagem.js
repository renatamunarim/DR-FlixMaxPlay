const telaCadastro = document.querySelector('#cadastro')
let dadosPersonagens = []
let listaPersonagens = []
let cadastrado = document.getElementById('persosagem-cadastrado')
let listaPersonagemCadastrados = document.querySelector('#catalogo')
let listaPersonagensArmazenados = localStorage.getItem('personagem')
function mostrarCadastro() {
    telaCadastro.classList.toggle('oculta')
}
function cadastrarPersonagem(eventoRecebido) {
    eventoRecebido.preventDefault()
    const inputUrlPersonagem = document.querySelector('#url-personagem').value
    const inputNomePersonagem = document.querySelector('#nome-personagem').value
    const inputTituloFilme = document.querySelector('#titulo-filme').value
    const inputNomeAtor = document.querySelector('#nome-ator').value
    const inputDescricaoPersonagem = document.querySelector('#descricao-personagem').value
    const inputHabilidadeAtor = document.querySelector('#habilidade-ator').value

    dadosPersonagens.push(inputUrlPersonagem, inputNomePersonagem, inputTituloFilme, inputNomeAtor, inputDescricaoPersonagem, inputHabilidadeAtor)
    listaPersonagens.push(dadosPersonagens)

    dadosPersonagens = []
    localStorage.setItem('personagem', JSON.stringify(listaPersonagens))
}
if (listaPersonagensArmazenados) {
    listaPersonagens = JSON.parse(listaPersonagensArmazenados)
    for (let i = 0; i < listaPersonagens.length; i++) {
        listaPersonagemCadastrados.innerHTML += `<div class="itens">
        <img id="imagem-item" src="${listaPersonagens[i][0]}" alt="">
        <p>Nome Personagem:</br>${listaPersonagens[i][1]}</p>
        <p>Título do Filme:</br>${listaPersonagens[i][2]}</p>
        <p>Nome do Ator/Atriz:</br>${listaPersonagens[i][3]}</p>
        <p>Descrição Personagem:</br>${listaPersonagens[i][4]}</p>
        <p>Habilidade Ator/Atriz:</br>${listaPersonagens[i][5]}</p>   
        <button id="botao-excluir" onclick="excluirPersonagem(${i})"><img id="imagem-excluir" src="botaoExcluir.png" alt=""></button>     
    </div>`
    }
}
function excluirPersonagem(indice) {
    listaPersonagens.splice(indice, 1)
    localStorage.setItem('personagem', JSON.stringify(listaPersonagens))
    listaPersonagemCadastrados.innerHTML = ""
    for (let i = 0; i < listaPersonagens.length; i++) {
        listaPersonagemCadastrados.innerHTML += `<div class="itens">
        <img id="imagem-item" src="${listaPersonagens[i][0]}" alt="">
        <p>Nome Personagem:</br>${listaPersonagens[i][1]}</p>
        <p>Título do Filme:</br>${listaPersonagens[i][2]}</p>
        <p>Nome do Ator/Atriz:</br>${listaPersonagens[i][3]}</p>
        <p>Descrição Personagem:</br>${listaPersonagens[i][4]}</p>
        <p>Habilidade Ator/Atriz:</br>${listaPersonagens[i][5]}</p>   
        <button id="botao-excluir" onclick="excluirPersonagem(${i})"><img id="imagem-excluir" src="botaoExcluir.png" alt=""></button>     
    </div>`
    }
}