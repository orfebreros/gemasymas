function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");
    const isVisible = sidebar.classList.toggle("show-sidebar");

    if (isVisible) {
        menuBtn.style.display = "none";
    } else {
        menuBtn.style.display = "block";
    }
}

function toggleSubcategories() {
    const sub = document.querySelector(".subcategory");
    const arrow = document.getElementById('tools-arrow');


    sub.style.display = sub.style.display === "block" ? "none" : "block";

    
    // Cambia la dirección de la flecha
    sub.classList.toggle('active');
    if (sub.classList.contains('active')) {
        arrow.classList.remove('bi-chevron-down');
        arrow.classList.add('bi-chevron-right');
    } else {
        arrow.classList.remove('bi-chevron-right');
        arrow.classList.add('bi-chevron-down');
    }
}





document.addEventListener("DOMContentLoaded", function() {

    const subcategory = document.querySelector(".subcategory");
    subcategory.style.display = "block";  // Asegura que las subcategorías estén colapsadas al inicio

    
    
  const checkboxes = document.querySelectorAll('input[type="checkbox"]'); // Selecciona los checkboxes
  const productosContainer = document.querySelector(".productos-container"); // Contenedor de productos
  const tarjetas = Array.from(document.querySelectorAll(".card-container, .card-container-products")); // Contenedor de tarjetas

  function filtrarProductos() {
      const seleccionados = Array.from(checkboxes)
          .filter(checkbox => checkbox.checked) // Filtra solo los que están marcados
          .map(checkbox => checkbox.dataset.categoria); // Obtiene las categorías seleccionadas

      // Limpiar el contenedor antes de volver a agregar elementos
      productosContainer.innerHTML = "";

      // Si no hay ningún filtro seleccionado, mostrar todas las tarjetas
      if (seleccionados.length === 0) {
          tarjetas.forEach(tarjeta => productosContainer.appendChild(tarjeta));
          return;
      }

      // Filtrar las tarjetas según la categoría seleccionada
      tarjetas.forEach(tarjeta => {
          const categoria = tarjeta.dataset.categoria; // Categoría de la tarjeta
          if (seleccionados.includes(categoria)) {
              productosContainer.appendChild(tarjeta); // Solo agregar las que coincidan
          }
      });
  }

  // Evento para cada checkbox
  checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", filtrarProductos);
  });

  // Mostrar todos al inicio
  filtrarProductos();


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
        document.getElementById('modalToolAttribute5').textContent = this.getAttribute('attribute5');
        document.getElementById('modalToolAttribute6').textContent = this.getAttribute('attribute6');
        document.getElementById('modalToolAttribute7').textContent = this.getAttribute('attribute7');
        document.getElementById('modalToolAttribute8').textContent = this.getAttribute('attribute8');
        document.getElementById('modalToolAttribute9').textContent = this.getAttribute('attribute9');
        document.getElementById('modalToolAttribute10').textContent = this.getAttribute('attribute10');
        document.getElementById('modalToolAttribute11').textContent = this.getAttribute('attribute11');
        document.getElementById('modalToolAttribute12').textContent = this.getAttribute('attribute12');
        document.getElementById('modalToolAttribute13').textContent = this.getAttribute('attribute13');
        document.getElementById('modalToolAttribute14').textContent = this.getAttribute('attribute14');
        document.getElementById('modalToolAttribute15').textContent = this.getAttribute('attribute15');
        document.getElementById('modalToolAttribute16').textContent = this.getAttribute('attribute16');
        document.getElementById('modalToolAttribute17').textContent = this.getAttribute('attribute17');
        document.getElementById('modalToolAttribute18').textContent = this.getAttribute('attribute18');
        document.getElementById('modalToolAttribute19').textContent = this.getAttribute('attribute19');
        document.getElementById('modalToolAttribute20').textContent = this.getAttribute('attribute20');
        document.getElementById('modalToolAttribute21').textContent = this.getAttribute('attribute21');
        document.getElementById('modalToolAttribute22').textContent = this.getAttribute('attribute22');
        document.getElementById('modalToolAttribute23').textContent = this.getAttribute('attribute23');
        document.getElementById('modalToolAttribute24').textContent = this.getAttribute('attribute24');
        document.getElementById('modalToolAttribute25').textContent = this.getAttribute('attribute25');
        document.getElementById('modalToolAttribute26').textContent = this.getAttribute('attribute26');
        document.getElementById('modalToolAttribute27').textContent = this.getAttribute('attribute27');
        document.getElementById('modalToolAttribute28').textContent = this.getAttribute('attribute28');
        document.getElementById('modalToolAttribute29').textContent = this.getAttribute('attribute29');
        document.getElementById('modalToolAttribute30').textContent = this.getAttribute('attribute30');
        document.getElementById('modalToolAttribute31').textContent = this.getAttribute('attribute31');
        document.getElementById('modalToolAttribute32').textContent = this.getAttribute('attribute32');

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
  document.getElementById('_next').value = data.prodUrl + 'sobre-nosotros.html#secContacto';
  })
  .catch(error => console.error('Error al cargar archivo JSON:', error));

});