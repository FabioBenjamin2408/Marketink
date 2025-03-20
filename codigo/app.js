let open = false; // Variável para controlar o estado da barra de pesquisa

document.querySelector(".search-container img").addEventListener("click", toggleSearch);

function toggleSearch() {
  const input = document.querySelector(".search-container input");
  const searchIcon = document.querySelector(".search-container img");
  const paragraphs = document.querySelectorAll(".search-container p");

  if (!open) {
    input.style.width = "100%";
    searchIcon.style.right = "42px";
    searchIcon.style.transform = "rotate(360deg)";
    input.style.opacity = "1";
    paragraphs.forEach((e) => e.style.opacity = "0");
  } else {
    input.style.width = "0%";
    input.style.opacity = "0";
    searchIcon.style.transform = "rotate(0deg)";
    paragraphs.forEach((e) => e.style.opacity = "1");

    document.querySelectorAll(".sidebar .types div p").forEach((e) => {
      e.style.cssText = ""; // Reset styles if necessary
    });
  }
  open = !open; // Inverte o estado
}


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
