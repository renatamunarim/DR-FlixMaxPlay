let detalhesFilmes = []
let listaDeFilmes = []
const telaCadastro = document.querySelector('#cadastro')
let listaDetalhesDeFilme = localStorage.getItem('filmes')
function mostrarCadastro() {
    telaCadastro.classList.toggle('oculta')
}

function adicionarFilme(eventoRecebido) {
    eventoRecebido.preventDefault()
    let inputCapa = document.querySelector('#id_capa').value
    let inputNome = document.querySelector('#id_nome').value
    let inputAutor = document.querySelector('#id_autor').value
    let inputLancamento = document.querySelector('#id_lancamento').value
    let inputGenero = document.querySelector('#id_genero').value
    let inputDuracao = document.querySelector('#id_duracao').value
    let inputSinopse = document.querySelector('#id_sinopse').value

    if (inputCapa != "" && inputNome != "" && inputAutor != "" && inputLancamento != "" && inputGenero != "" && inputDuracao != "" && inputSinopse != "") {
        detalhesFilmes.push(inputCapa, inputNome, inputAutor, inputLancamento, inputGenero, inputDuracao, inputSinopse)
    } 
    listaDeFilmes.push(detalhesFilmes)
    detalhesFilmes = []
    localStorage.setItem('filmes', JSON.stringify(listaDeFilmes))
    divCatalogo.innerHTML = ""
    for (let i = 0; i < listaDeFilmes.length; i++) {
        divCatalogo.innerHTML += `<div class="itens">
        <img id="imagem-item" src="${listaDeFilmes[i][0]}" alt="">
        <p>Título: ${listaDeFilmes[i][1]}</p>
        <p>Diretor: ${listaDeFilmes[i][2]}</p>
        <p>Lançamento: ${listaDeFilmes[i][3]}</p>
        <p>Gênero: ${listaDeFilmes[i][4]}</p>
        <p>Duração: ${listaDeFilmes[i][5]}</p>
        <p>Sinopse: ${listaDeFilmes[i][6]}</p>
        <button id="botao-excluir" onclick="excluirFilme(${i})"><img id="imagem-excluir" src="botaoExcluir.png" alt=""></button>
        </div>`
    }
}
let divCatalogo = document.getElementById('catalogo')

if (listaDetalhesDeFilme) {

    listaDeFilmes = JSON.parse(listaDetalhesDeFilme)

    for (let i = 0; i < listaDeFilmes.length; i++) {
        divCatalogo.innerHTML += `<div class="itens">
        <img id="imagem-item" src="${listaDeFilmes[i][0]}" alt="">
        <p>Título: ${listaDeFilmes[i][1]}</p>
        <p>Diretor: ${listaDeFilmes[i][2]}</p>
        <p>Lançamento: ${listaDeFilmes[i][3]}</p>
        <p>Duração: ${listaDeFilmes[i][4]}</p>
        <p>${listaDeFilmes[i][5]}</p>
        <p>${listaDeFilmes[i][6]}</p>
        <button id="botao-excluir" onclick="excluirFilme(${i})"><img id="imagem-excluir" src="botaoExcluir.png" alt=""></button>
        </div>`

    }
}
function excluirFilme(indice) {
    listaDeFilmes.splice(indice, 1)
    localStorage.setItem('filmes', JSON.stringify(listaDeFilmes))
    divCatalogo.innerHTML = ""
    for (let i = 0; i < listaDeFilmes.length; i++) {
        divCatalogo.innerHTML += `<div class="itens">
        <img id="imagem-item" src="${listaDeFilmes[i][0]}" alt="">
        <p>Título: ${listaDeFilmes[i][1]}</p>
        <p>Diretor: ${listaDeFilmes[i][2]}</p>
        <p>Lançamento: ${listaDeFilmes[i][3]}</p>
        <p>Gênero: ${listaDeFilmes[i][4]}</p>
        <p>Duração: ${listaDeFilmes[i][5]}</p>
        <p>Sinopse: ${listaDeFilmes[i][6]}</p>
        <button id="botao-excluir" onclick="excluirFilme(${i})"><img id="imagem-excluir" src="botaoExcluir.png" alt=""></button>
        </div>`
    }
}
