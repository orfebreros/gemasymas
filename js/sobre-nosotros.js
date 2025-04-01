document.addEventListener("DOMContentLoaded", function() {

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