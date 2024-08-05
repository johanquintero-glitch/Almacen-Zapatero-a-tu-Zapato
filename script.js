document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("header nav ul li a");
  const mainContent = document.getElementById("main-content");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const content = event.target.getAttribute("data-content");
      loadContent(content);
    });
  });

  function loadContent(content) {
    switch (content) {
      case "home":
        mainContent.innerHTML =
          `<div>
            <h1>Bienvenido a Zapatero a tu Zapato</h1>
            <p>Encuentra los mejores zapatos y servicios de reparación aquí.</p>
            <img src="ph.png" alt="Zapatero a tu Zapato" />
          </div>
          `
        break;
      case "catalogue":
        mainContent.innerHTML =
          `<div>
                <h2>Catálogo de Zapatos</h2>
                <div class="Zapatos depotivos">
                    <img src="negro-25.jpg" alt="Zapato 1">
                    <h3>Zapato 1</h3>
                    <p>Descripción del Zapato 1</p>
                    <p>Precio: $XX.XX</p>
                </div>
                <div class="Tacones">
                    <img src="Reglas-para-ser-sexi-en-tacones-4.png" alt="Zapato 2">
                    <h3>Zapato 2</h3>
                    <p>Descripción del Zapato 2</p>
                    <p>Precio: $XX.XX</p>
                </div>
                <div class="Botas">
                    <img src="ph.png" alt="Zapato 3">
                    <h3>Zapato 3</h3>
                    <p>Descripción del Zapato 3</p>
                    <p>Precio: $XX.XX</p>
                </div>
                <!-- Añade más productos según sea necesario -->
              </div>
              `
        break;
      case "about":
        mainContent.innerHTML =
          "<h1>Sobre Nosotros</h1><p>Conoce más sobre nuestra historia.</p><h8>Somos una empresa con el fin de distribuir el calzado cómodo y digno para las personas pero también para generar empleo en nuestra comunidad</h8>";
        break;
      case "contact":
        mainContent.innerHTML =
          "<h1>Contacto</h1><p>Ponte en contacto con nosotros.</p><h2>Administradores de la empresa<h2><h8>300 0370976: Isabela Valderrama y 317 2921988 Johan Quintero</h8>";
        break;
        case "ubication":
          mainContent.innerHTML =
            "<h1>Ubicación</h1><p>Encuentranos aquí:</p><h4>Carrera 28 Calle 112 N° 14 - 13</h4>";
          break;
    }
  }
});
