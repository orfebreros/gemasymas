// CAMBIAR DE COLOR HEADER

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let navbar = document.querySelector(".navbar");

  let scrollY = window.scrollY;
  let opacity = Math.min(scrollY / 100, 1); // Ajusta el valor máximo de opacidad

  // Cambiar el color de fondo con opacidad gradual
  header.style.backgroundColor = `rgba(25, 46, 90, ${opacity})`; // Fondo azul con opacidad ajustada

  // Cambiar el color de texto de la navbar
  if (scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// TARJETAS Y MODAL

document.querySelectorAll('.card-container').forEach(card => {
  card.addEventListener('click', function () {
    const images = this.getAttribute('data-image').split(',');
    const title = this.getAttribute('data-title');
    const details = this.getAttribute('data-details');

    // Actualizar contenido de la modal
    document.getElementById('modalProductTitle').textContent = title;
    document.getElementById('modalProductDetails').textContent = details;
    
    // Crear las imágenes del carousel
    const carouselInner = document.getElementById('carouselImages');
    carouselInner.innerHTML = ''; // Limpiar las imágenes previas

    images.forEach((image, index) => {
      const activeClass = index === 0 ? 'active' : ''; // La primera imagen estará activa
      const carouselItem = `
        <div class="carousel-item ${activeClass}">
          <img src="${image}" class="d-block" alt="Producto" style="width: 100%; height: 100%;">
        </div>
      `;
      carouselInner.innerHTML += carouselItem; // Agregar la imagen al carousel
    });

    // Obtener la tarjeta actual
    const card = this.querySelector('.card');
    card.classList.add('hide'); // Agregar la clase 'hide' para desaparecer la tarjeta

    // Mostrar la modal después de un ligero retraso para que el desvanecimiento sea visible
    setTimeout(() => {
      const modal = new bootstrap.Modal(document.getElementById('infoModal'));
      modal.show();

      // Restablecer la tarjeta cuando la modal se cierra
      document.getElementById('infoModal').addEventListener('hidden.bs.modal', () => {
        card.classList.remove('hide'); // Hacer que la tarjeta vuelva a aparecer
      });
    }, 100); // Trabaja con el estilo de la clase modal-flip
  });
});

  
// FOOTER

const fecha = new Date();
var footer = "Copyright © " + fecha.getFullYear() + " Grupo Orfebreros, S.A. All Rights Reserved.";
document.getElementById("DevuelveTextoFooterConAnio").innerHTML = footer;


// FORMSUBMIT REDIRECT URL

fetch('config.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('_next').value = data.prodUrl + 'index.html#secContacto';
  })
  .catch(error => console.error('Error al cargar archivo JSON:', error));