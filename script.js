// =========================
// ARQUIVO: script.js
// =========================

// MENU MOBILE
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Ao clicar no botão,
// o menu aparece/desaparece
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// =========================
// TEMA CLARO/ESCURO
// =========================

const themeBtn = document.getElementById("theme-btn");

// Alterna classe "light"
themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

});

// =========================
// FORMULÁRIO
// =========================

const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {

  // Impede envio padrão
  event.preventDefault();

  // Captura valores
  const nome = document.getElementById("nome").value.trim();

  const email = document.getElementById("email").value.trim();

  const mensagem = document.getElementById("mensagem").value.trim();

  // Elemento da mensagem
  const formMessage = document.getElementById("form-message");

  // Verifica campos vazios
  if(nome === "" || email === "" || mensagem === ""){

    formMessage.innerText =
      "Preencha todos os campos.";

    return;
  }

  // Validação simples de e-mail
  const emailValido =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailValido.test(email)){

    formMessage.innerText =
      "Digite um e-mail válido.";

    return;
  }

  // Mensagem de sucesso
  formMessage.innerText =
    "Mensagem enviada com sucesso!";

  // Limpa formulário
  form.reset();

});
