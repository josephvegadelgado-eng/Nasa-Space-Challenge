// 🌍 Cambio de idioma
const btn = document.getElementById('lang-toggle');
let current = 'es';

btn.addEventListener('click', () => {
  current = current === 'es' ? 'en' : 'es';
  document.querySelectorAll('[data-es]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + current);
  });
  btn.textContent = current === 'es' ? '🌍 English' : '🌎 Español';
});

// 🎬 Modal de animación
const modal = document.getElementById('modalAnimacion');
const btnVer = document.getElementById('verAnimacion');
const cerrar = modal.querySelector('.cerrar');
btnVer.onclick = () => modal.style.display = 'flex';
cerrar.onclick = () => modal.style.display = 'none';
window.onclick = e => { if (e.target == modal) modal.style.display = 'none'; }

// 🌱 Simulación Drag & Drop
const raiz = document.querySelector('.raiz');
const suelo = document.querySelector('.suelo');
raiz.addEventListener('dragstart', e => e.dataTransfer.setData('text', 'raiz'));
suelo.addEventListener('dragover', e => e.preventDefault());
suelo.addEventListener('drop', e => {
  e.preventDefault();
  suelo.textContent = '🌱 ¡La raíz creció!';
});

// 🧠 Cuestionario
const quizBtns = document.querySelectorAll('.quiz-btn');
const feedback = document.getElementById('quiz-feedback');
quizBtns.forEach(btn => {
  btn.onclick = () => {
    if (btn.hasAttribute('data-correct')) {
      feedback.textContent = '✅ ¡Correcto! Las raíces crecen hacia abajo por gravitropismo.';
      feedback.style.color = '#00e676';
    } else {
      feedback.textContent = '❌ Intenta de nuevo.';
      feedback.style.color = '#ff1744';
    }
  };
}); 
// 🔽 Scroll suave para los enlaces del menú
document.querySelectorAll('nav a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
// ✨ Resalta el enlace activo del menú según la sección visible
const secciones = document.querySelectorAll('section[id]');
const enlacesNav = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY + 150; // margen para detectar antes del centro

  secciones.forEach(seccion => {
    const top = seccion.offsetTop;
    const height = seccion.offsetHeight;
    const id = seccion.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      enlacesNav.forEach(enlace => {
        enlace.classList.remove('activo');
        if (enlace.getAttribute('href') === `#${id}`) {
          enlace.classList.add('activo');
        }
      });
    }
  });
});
