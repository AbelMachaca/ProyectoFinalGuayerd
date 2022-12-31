let center = [25.2841478, 51.4419568];

let map = L.map("map").setView(center, 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

const objeto1 = [
  {
    opcionC: "El camino que recorrí...",
  },
];

const objetoMapa = [
  {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
  },
  {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
  },
  {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
  },
  {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
  },
];

let markerIcon = L.icon({
  iconUrl: "img/Marker.png",
  iconSize: [40, 40],
  iconAnchor: [22, 44],
  popupAnchor: [8, -41],
});

let marker = L.marker(center, { icon: markerIcon }).addTo(map);
let select = document.querySelector("select");
let opciones = objetoMapa.map((objeto) => `<option>${objeto.jugador}</option>`);
let opciones2 = objeto1.map(
  (objeto) => `<option value="" disabled selected>${objeto.opcionC}</option>`
);

let opciones3 = opciones2 + opciones;

select.innerHTML = opciones3.replaceAll(",", "");

function changeMap() {
  const objeto = objetoMapa.find((item) => item.jugador === select.value);

  map.setView(new L.LatLng(...objeto.coordenada), 11);
  marker.remove();
  marker = L.marker(objeto.coordenada, { icon: markerIcon }).addTo(map);
  marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}

const cerrarSesion = () => {
  localStorage.removeItem("logged");
  window.location.href = "index.html";
};

if (!localStorage.getItem("logged") === true) {
  window.location.href = "index.html";
}
