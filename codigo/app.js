function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultado = "";

    // Verifica se os elementos existem
    if (!section || !campoPesquisa) {
        console.error("Elementos do DOM não encontrados.");
        return;
    }

    // Filtra os dados que correspondem à pesquisa
    let filtrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(campoPesquisa) || 
        dado.tags.toLowerCase().includes(campoPesquisa)
    );

    // Gera o HTML dos resultados
    if (filtrados.length > 0) {
        resultado = filtrados.map(dado => `
            <div class="item-resultado">
                <div class="info">
                    <h2>${dado.nome}</h2>
                    <p>${dado.descricao}</p>
                </div>
                <img src="Imagens/${dado.foto}" alt="Imagem de ${dado.nome}">
            </div>
        `).join(""); // Junta os elementos sem vírgulas
    } else {
        resultado = '<div class="item-erro"><h2>Nada foi encontrado</h2></div>';
    }

    // Atualiza a seção com os resultados
    section.innerHTML = resultado;
}
