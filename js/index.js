// CAMBIAR DE COLOR HEADER

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let navbar = document.querySelector(".navbar");

  let scrollY = window.scrollY;

  if (window.innerWidth > 767) {
    let opacity = Math.min(scrollY / 100, 1); // Ajusta el valor máximo de opacidad

    // Cambiar el color de fondo con opacidad gradual
    header.style.backgroundColor = `rgba(25, 46, 90, ${opacity})`; // Fondo azul con opacidad ajustada

    // Cambiar el color de texto de la navbar
    if (scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  } else {
    if (scrollY === 0) {
      // Si estamos al principio de la página, no cambiar el fondo
      header.style.backgroundColor = '#192e5a'; // Color fijo en pantallas pequeñas
    }
    navbar.classList.remove("scrolled"); // No aplicamos el cambio de color en el navbar
  }
});


// TARJETAS Y MODAL DE PIEDRAS
document.querySelectorAll('.card-container').forEach(card => {
  card.addEventListener('click', function () {
    const images = this.getAttribute('data-image').split(',');

      // Actualizar la información de la modal
      document.getElementById('modalProductTitle').textContent = this.getAttribute('data-title');
      document.getElementById('modalProductDetails').textContent = this.getAttribute('data-details');
      document.getElementById('modalProductMeasurements').textContent = this.getAttribute('data-measurements');
      document.getElementById('modalProductColors').textContent = this.getAttribute('data-colors');
      
      // Crear las imágenes del carousel
      const carouselInner = document.getElementById('carouselImages');
      carouselInner.innerHTML = ''; // Limpiar las imágenes previas
  
      images.forEach((image, index) => {
          const activeClass = index === 0 ? 'active' : ''; // La primera imagen estará activa
          const carouselItem = `
          <div class="carousel-item ${activeClass}">
              <img src="${image}" class="d-block" alt="Piedras" style="width: 100%; height: 100%;">
          </div>
          `;
          carouselInner.innerHTML += carouselItem; // Agregar la imagen al carousel
      });
  
      // Desaparecer la tarjeta actual, (efecto de levantar la tarjeta)
      const card = this.querySelector('.card'); // Obtener la tarjeta actual
      card.classList.add('hide'); // Agregar la clase 'hide' para desaparecer la tarjeta
  
      // Mostrar la modal con un efecto de vuelta, después de un ligero retraso
      setTimeout(() => {
          const modal = new bootstrap.Modal(document.getElementById('infoModal'));
          modal.show();
  
          // Restablecer la tarjeta cuando la modal se cierra
          const modalElement = document.getElementById('infoModal');
          modalElement.addEventListener('hidden.bs.modal', () => {
          card.classList.remove('hide'); // Eliminar la clase 'hide' para hacer que la tarjeta vuelva a aparecer
          });
      }, 100); // Trabaja con el estilo de la clase modal-flip
  });
});

// TARJETAS Y MODAL DE HERRAMIENTAS
document.querySelectorAll('.card-container-products').forEach(card => {
  card.addEventListener('click', function () {
      document.getElementById('modalToolImage').src = this.getAttribute('data-image');
      document.getElementById('modalToolTitle').textContent = this.getAttribute('data-title');
      document.getElementById('modalToolDetails').textContent = this.getAttribute('data-details');
      document.getElementById('modalToolAttribute1').textContent = this.getAttribute('attribute1');
      document.getElementById('modalToolAttribute2').textContent = this.getAttribute('attribute2');
      document.getElementById('modalToolAttribute3').textContent = this.getAttribute('attribute3');
      document.getElementById('modalToolAttribute4').textContent = this.getAttribute('attribute4');

      // Desaparecer la tarjeta actual, (efecto de levantar la tarjeta)
      const card = this.querySelector('.card'); // Obtener la tarjeta actual
      card.classList.add('hide'); // Agregar la clase 'hide' para desaparecer la tarjeta
  
      // Mostrar la modal con un efecto de vuelta, después de un ligero retraso
      setTimeout(() => {
          const modal = new bootstrap.Modal(document.getElementById('infoToolModal'));
          modal.show();
  
          // Restablecer la tarjeta cuando la modal se cierra
          const modalElement = document.getElementById('infoToolModal');
          modalElement.addEventListener('hidden.bs.modal', () => {
          card.classList.remove('hide'); // Eliminar la clase 'hide' para hacer que la tarjeta vuelva a aparecer
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