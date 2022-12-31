const cerrarSesion = () => {
  localStorage.removeItem("logged");
  window.location.href = "index.html";
};

if (!localStorage.getItem("logged") === true) {
  window.location.href = "index.html";
}

fetch("https://639a535a3a5fbccb5264b073.mockapi.io/jugadores")
  .then((response) => response.json())
  .then((data) => {
    let jugadores = data.map(
      (jugador) =>
        `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-2 float-start">
            <div class="card carta1" >
                <div class="img-wrapper jugadores">
                <span class="numero">${jugador.dorsal}</span>
                <img src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg" class="card-img-top" alt="${jugador.name}">
                </div
                <div class="card-body">
                <h5 class="card-title h5">${jugador.name}</h5>
                <p class="card-text " id="p">Edad: ${jugador.edad}</p>
                <p class="card-text " id="p">Posición: ${jugador.posicion}</p>
                <p class="card-text " id="p">Peso: ${jugador["stats-fisico"].peso}</p>
                <p class="card-text " id="p">Altura: ${jugador["stats-fisico"].altura}</p>
                <p class="card-text " id="p">Equipo actual: ${jugador["equipo-actual"]}</p>
                <p class="card-text " id="p6">Fecha de nacimiento: ${jugador["fecha-nacimiento"]}</p>
                </div>
            </div>
        </div>
        `
    );

    let section = document.querySelector("section");
    section.innerHTML = jugadores.join().replaceAll(",", "");
  })

  .catch((error) => console.log(error));
