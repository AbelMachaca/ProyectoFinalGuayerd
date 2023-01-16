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
    jugador: "#1 Franco Armani",
    coordenada: [-33.044167, -61.168056],
    ciudad: "Casilda",
  },
  {
    jugador: "#2 Juan Foyth",
    coordenada: [-34.933333, -57.95],
    ciudad: "La Plata",
  },
  {
    jugador: "#3 Nicolás Tagliafico",
    coordenada: [-34.783333, -58.366667],
    ciudad: "Rafael Calzada",
  },
  {
    jugador: "#4 Gonzalo Montiel",
    coordenada: [-34.770833, -58.646389],
    ciudad: "González Catán",
  },
  {
    jugador: "#5 Leandro Paredes",
    coordenada: [-34.683333, -58.55],
    ciudad: "San Justo",
  },
  {
    jugador: "#6 Germán Pezzella",
    coordenada: [-38.716667, -62.266667],
    ciudad: "Bahía Blanca",
  },
  {
    jugador: "#7 Rodrigo de Paul",
    coordenada: [-34.683333, -58.333333],
    ciudad: "Sarandí",
  },
  {
    jugador: "#8 Marcos Acuña",
    coordenada: [-38.902778, -70.065],
    ciudad: "Zapala",
  },
  {
    jugador: "#9 Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
  },
  {
    jugador: "#10 Lionel Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "#11 Ángel Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "#12 Gerónimo Rulli",
    coordenada: [-34.933333, -57.95],
    ciudad: "La Plata",
  },
  {
    jugador: "#13 Cristian Romero",
    coordenada: [-31.416667, -64.183333],
    ciudad: "Córdoba",
  },
  {
    jugador: "#14 Exequiel Palacios",
    coordenada: [-27.05, -65.4],
    ciudad: "Famaillá",
  },
  {
    jugador: "#15 Ángel Correa",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "#16 Thiago Almada",
    coordenada: [-34.633333, -58.533333],
    ciudad: "Ciudadela",
  },
  {
    jugador: "#17 Alejandro Gómez",
    coordenada: [-34.599722, -58.381944],
    ciudad: "Ciudad Autónoma de Buenos Aires",
  },
  {
    jugador: "#18 Guido Rodríguez",
    coordenada: [-34.6, -58.516667],
    ciudad: "Sáenz Peña",
  },
  {
    jugador: "#19 Nicolás Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
  },
  {
    jugador: "#20 Alexis Mac Allister",
    coordenada: [-36.620278, -64.290556],
    ciudad: "Santa Rosa",
  },
  {
    jugador: "#21 Paulo Dybala",
    coordenada: [-31.776389, -63.801111],
    ciudad: "Laguna Larga",
  },
  {
    jugador: "#22 Lautaro Martínez",
    coordenada: [-38.716667, -62.266667],
    ciudad: "Bahía Blanca",
  },
  {
    jugador: "#23 Emiliano Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
  },
  {
    jugador: "#24 Enzo Fernández",
    coordenada: [-34.566667, -58.533333],
    ciudad: "San Martín",
  },
  {
    jugador: "#25 Lisandro Martínez",
    coordenada: [-33.15, -59.316667],
    ciudad: "Gualeguay",
  },
  {
    jugador: "#26 Nahuel Molina",
    coordenada: [-32.183333, -64.416667],
    ciudad: "Embalse",
  },
  {
    jugador: "DT Lionel Scaloni",
    coordenada: [-33.0169, -61.0431],
    ciudad: "Pujato",
  },
];

let markerIcon = L.icon({
  iconUrl: "img/marker.svg",
  iconSize: [60, 60],
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

  map.flyTo(new L.LatLng(...objeto.coordenada), 11);
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
