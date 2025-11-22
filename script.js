// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function validar() {
  let nome = formContato.nome.value;
  let email = formContato.email.value;
  let tel = formContato.tel.value;
  let avaliacao = formContato.avaliacao.value;

  if (nome == "") {
    alert("Por favor preeencha o campo com seu nome!");
    form1.nome.focus();
    return false;
  }
  
  if (email == "") {
    alert("Por favor preeencha o campo com seu email!");
    form1.email.focus();
    return false;
  }
  
  if (tel == "") {
    alert("Por favor preeencha o campo com seu número de telefone!");
    form1.tel.focus();
    return false;
  }
  
  if (avaliacao == "") {
    alert("Por favor, avalie o site.");
    form1.avaliacao.focus();
    return false;
  }
}

const stars = document.querySelectorAll('.rating input');
const ratingDisplay = document.createElement('p');
ratingDisplay.textContent = '0 of 5';
document.querySelector('.avaliacao').after(ratingDisplay);

stars.forEach(star => {
  star.addEventListener('change', () => {
    ratingDisplay.textContent = `${star.value} of 5`;
  });
});