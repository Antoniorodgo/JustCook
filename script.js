const loader = document.getElementById("loader");
const resultadoDiv = document.getElementById("resultado");

loader.style.display = "block"; // Mostrar loader antes de iniciar

fetch(url)
  .then(response => response.json())
  .then(data => {
    loader.style.display = "none"; // Ocultar cuando carga
    resultadoDiv.innerHTML = "";

    if (data.length > 0) {
      // ... aquí sigue tu lógica
    } else {
      resultadoDiv.textContent = "No se encontraron recetas con esos ingredientes.";
    }
  })
  .catch(error => {
    loader.style.display = "none"; // Ocultar también en errores
    console.error("Error al obtener recetas:", error);
    resultadoDiv.textContent = "Hubo un error al buscar recetas.";
  });
