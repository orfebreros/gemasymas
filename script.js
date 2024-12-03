// TARJETAS Y MODAL

document.querySelectorAll('.flip-card-btn').forEach(button => {
  button.addEventListener('click', function () {
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
          <img src="${image}" class="d-block w-100" alt="Producto">
        </div>
      `;
      carouselInner.innerHTML += carouselItem; // Agregar la imagen al carousel
    });

    // Obtener la tarjeta actual
    const card = this.closest('.card');
    card.classList.add('hide'); // Agregar la clase 'hide' para desaparecer la tarjeta

    // Mostrar la modal después de un ligero retraso para que el desvanecimiento sea visible
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

  
// FOOTER

const fecha = new Date();
var footer = "Copyright © " + fecha.getFullYear() + " Grupo Orfebreros, S.A. All Rights Reserved.";
document.getElementById("DevuelveTextoFooterConAnio").innerHTML = footer;