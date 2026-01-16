const imagens = [
    "/imagens/Gemini_Generated_Image_darwhqdarwhqdarw.png",
    "/imagens/WhatsApp Image 2026-01-16 at 1.59.43 PM.jpeg ",
    "/imagens/WhatsApp Image 2026-01-16 at 1.59.44 PM.jpeg",
    "/imagens/WhatsApp Image 2026-01-16 at 1.59.42 PM.jpeg"
];

let index = 0;
const img = document.getElementById("imagem");
let intervalo;

// Atualiza imagem com animação
function atualizarImagem() {
    img.classList.remove("fade");
    void img.offsetWidth; // força reflow
    img.src = imagens[index];
    img.classList.add("fade");
}

// Avançar
function avancar() {
    index = (index + 1) % imagens.length;
    atualizarImagem();
}

// Voltar
function voltar() {
    index = (index - 1 + imagens.length) % imagens.length;
    atualizarImagem();
}

// Auto slide
function iniciarAuto() {
    intervalo = setInterval(avancar, 4000); // 4 segundos
}

// Pausar
function pararAuto() {
    clearInterval(intervalo);
}

// Iniciar automaticamente
iniciarAuto();

// Pausa ao passar o mouse
img.addEventListener("mouseenter", pararAuto);
img.addEventListener("mouseleave", iniciarAuto);
