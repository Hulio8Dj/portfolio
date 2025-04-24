document.querySelectorAll('.accordion summary').forEach((summary) => {
  summary.addEventListener('click', function () {
    const accordion = this.parentElement; // La pestaña completa
    const content = accordion.querySelector('div'); // El contenido de la pestaña

    // Si la pestaña no está abierta
    if (!accordion.hasAttribute('open')) {
      // Cerramos todas las pestañas
      document.querySelectorAll('.accordion').forEach((item) => {
        const itemContent = item.querySelector('div');
        item.removeAttribute('open'); // Cerramos
        itemContent.style.maxHeight = '0'; // Reseteamos la altura
        itemContent.style.visibility = 'hidden'; // Ocultamos
      });

      // Abrimos la pestaña seleccionada
      accordion.setAttribute('open', 'true');
      content.style.maxHeight = content.scrollHeight + 'px'; // Ajustamos la altura
      content.style.visibility = 'visible'; // Hacemos visible el contenido
    } else {
      // Si la pestaña ya está abierta, la cerramos
      accordion.removeAttribute('open');
      content.style.maxHeight = '0'; // Cerramos
      content.style.visibility = 'hidden'; // Ocultamos
    }
  });
});

  
  