document.addEventListener("DOMContentLoaded", () => {
  fetch("procedimentos.json") // Substitua pelo caminho correto do JSON
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("procedimentos-container");
      container.innerHTML = "";

      // Garante que só tentará exibir no máximo 16 elementos, mesmo que haja mais no JSON
      const procedimentosExibidos = data.procedimentos.slice(0, Math.min(data.procedimentos.length, 16));

      procedimentosExibidos.forEach((procedimento) => {
        const card = document.createElement("div");
        card.classList.add("col-span-1", "max-sm:p-0");
        card.innerHTML = `
          <div class="h-full bg-[#8e6e55]/10 rounded-lg mb-[80px] relative shadow-black/30 shadow-md p-6">
           
            <h2 class="text-xl md:text-xl font-display font-bold text-center leading-6 md:leading-8 mt-2 max-sm:text-lg font-quiche bg-gradient-to-r from-[#b07a25] via-[#b07a25] to-[#f1ca6b] bg-clip-text text-transparent">
              ${procedimento.nome}
            </h2>
            <p class="text-md font-display text-center mt-5 max-sm:text-sm font-quiche bg-gradient-to-r from-[#040404] via-[#121111] to-[#0c0c0c] bg-clip-text pt-8 text-transparent">
              ${procedimento.descricao}
            </p>
            <div class="text-center mt-full absolute bottom-2 inset-x-2">
              <a href="produto.html?procedimento=${procedimento.nome}" class="bg-title-color text-primary text-md font-medium hover:brightness-125 hover:scale-105 transition-all duration-300 ease-in-out px-5 w-full block whitespace-nowrap py-3 rounded-lg max-sm:text-xs max-sm:px-2">
                Ver procedimento
              </a>
            </div>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar os procedimentos:", error)
    );
});
