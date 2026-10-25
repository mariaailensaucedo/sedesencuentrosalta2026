/* Encuentro Deportivo Salta 2026 – Sedes y distancias.
   Todos los datos están en la constante DATA (más abajo): para corregir un horario,
   una dirección o una estimación, editá solo ese bloque. */

const DATA = {
  actualizacion: "25/10/2026",

  // Orden de las estimaciones ("est") en cada disciplina: Crystal, Caseros, Alto Parque.
  hoteles: [
    { id: "crystal",    nombre: "Hotel Crystal",     origen: "Hotel Crystal, Urquiza 616, Salta, Argentina" },
    { id: "caseros",    nombre: "Hotel Caseros",     origen: "Hotel Caseros, Caseros 230, Salta, Argentina" },
    { id: "altoparque", nombre: "Hotel Alto Parque", origen: "Hotel Alto Parque, Av. San Martín 260, Salta, Argentina" }
  ],

  dias: [
    { key: "mie", etiqueta: "Mié 28" },
    { key: "jue", etiqueta: "Jue 29" },
    { key: "vie", etiqueta: "Vie 30" },
    { key: "sab", etiqueta: "Sáb 31" }
  ],

  // Destino de Google Maps para cada sede (texto o coordenadas).
  destinos: {
    SUM:     "SUM Consejo Profesional de Ciencias Económicas, España 1420, Salta, Argentina",
    LEGADO:  "Complejo Legado Güemes, Ibazeta 7566, Salta, Argentina",
    LOMA:    "-24.7821941,-65.4665613",
    POLO:    "Salta Polo Club, Av. Bolivia 2800, Salta, Argentina",
    BICENT:  "Parque del Bicentenario, Av. Memoria Verdad y Justicia, Salta, Argentina",
    UCASAL:  "-24.7417244,-65.3937178",
    VERBUM:  "Club Verbum Camp, Autopista Circunvalación Oeste, San Lorenzo Chico, Salta, Argentina",
    RAQUETA: "Club La Raqueta, Av. Finca Yerba Buena, Villa San Lorenzo, Salta, Argentina",
    DIQUE:   "-25.2854615,-65.4335263", // Embalse Cabra Corral (pin de Google Maps indicado por Ailén)
    JOCKEY:  "Jockey Club Salta, Ruta 51, Limache, Salta, Argentina",
    BATULE:  "-24.7150215,-65.4232956", // Unión Sirio Libanesa – Predio Ing. Batule (pin de Google Maps indicado por Ailén)
    TELEF:   "Teleférico San Bernardo, Av. San Martín y Hipólito Yrigoyen, Salta, Argentina"
  },

  disciplinas: [
    {"disciplina":"Ajedrez","sede":"SUM del CPCES","direccion":"España 1420","dias":{"mie":null,"jue":"10:00–19:00","vie":"10:00–19:00","sab":null},"destino":"SUM","est":["1,5 km · 5 min","1,5 km · 5 min","1,5 km · 5 min"]},
    {"disciplina":"Atletismo","sede":"Complejo Legado Güemes","direccion":"Ibazeta 7566","dias":{"mie":"14:00–18:00","jue":"8:00–18:00","vie":null,"sab":null},"destino":"LEGADO","est":["4 km · 12 min","4 km · 12 min","4 km · 12 min"]},
    {"disciplina":"Fútbol 11","sede":"Predio / Complejo Deportivo La Loma","direccion":"Av. Comodoro Rivadavia s/n, Finca Las Costas","dias":{"mie":"14:00–19:00","jue":"8:00–22:00","vie":"8:00–22:00","sab":"9:00–16:00"},"destino":"LOMA","est":["7 km · 18 min","7 km · 18 min","7 km · 18 min"]},
    {"disciplina":"Fútbol 5 femenino","sede":"Predio / Complejo Deportivo La Loma","direccion":"Av. Comodoro Rivadavia s/n, Finca Las Costas","dias":{"mie":"14:00–19:00","jue":"8:00–22:00","vie":"8:00–22:00","sab":"9:00–16:00"},"destino":"LOMA","est":["7 km · 18 min","7 km · 18 min","7 km · 18 min"]},
    {"disciplina":"Fútbol 5 masculino","sede":"Predio / Complejo Deportivo La Loma","direccion":"Av. Comodoro Rivadavia s/n, Finca Las Costas","dias":{"mie":"14:00–19:00","jue":"8:00–22:00","vie":"8:00–22:00","sab":"9:00–16:00"},"destino":"LOMA","est":["7 km · 18 min","7 km · 18 min","7 km · 18 min"]},
    {"disciplina":"Golf","sede":"Salta Polo Club","direccion":"Av. Bolivia 2800","dias":{"mie":null,"jue":"8:00–16:00","vie":"8:00–16:00","sab":null},"destino":"POLO","est":["5 km · 13 min","5 km · 13 min","5 km · 13 min"]},
    {"disciplina":"Maratón","sede":"Parque del Bicentenario","direccion":"Av. Memoria Verdad y Justicia, Zona Norte (acceso principal por Av. Bolivia)","dias":{"mie":null,"jue":null,"vie":"8:30–14:00","sab":null},"destino":"BICENT","est":["6 km · 15 min","6 km · 15 min","6 km · 15 min"],"nota":"Distancias: 3,2 / 9,6 / 12,8 km"},
    {"disciplina":"Mountain bike","sede":"Parque del Bicentenario","direccion":"Av. Memoria Verdad y Justicia, Zona Norte (acceso principal por Av. Bolivia)","dias":{"mie":null,"jue":null,"vie":"8:30–14:00","sab":null},"destino":"BICENT","est":["6 km · 15 min","6 km · 15 min","6 km · 15 min"]},
    {"disciplina":"Natación","sede":"Universidad Católica de Salta (UCASAL)","direccion":"Campus Castañares s/n, Zona Norte (acceso principal por Av. de Acceso N°2)","dias":{"mie":"11:00–17:00","jue":"11:00–17:00","vie":"11:00–17:00","sab":null},"notaMie":"reconocimiento de pileta","destino":"UCASAL","est":["7 km · 17 min","7 km · 17 min","7 km · 17 min"]},
    {"disciplina":"Newcom","sede":"Universidad Católica de Salta (UCASAL)","direccion":"Campus Castañares s/n, Zona Norte (acceso principal por Av. de Acceso N°2)","dias":{"mie":null,"jue":"8:00–19:00","vie":"8:00–19:00","sab":null},"destino":"UCASAL","est":["7 km · 17 min","7 km · 17 min","7 km · 17 min"]},
    {"disciplina":"Pádel (sede 1)","sede":"Complejo Verbum (Club Verbum Camp)","direccion":"Au. Circunvalación Oeste, San Lorenzo Chico","dias":{"mie":"14:00–19:00","jue":"8:00–20:00","vie":"8:00–20:00","sab":"9:00–16:00"},"destino":"VERBUM","est":["10 km · 22 min","10 km · 22 min","10 km · 22 min"]},
    {"disciplina":"Pádel (sede 2)","sede":"Club La Raqueta","direccion":"Av. Finca Yerba Buena s/n, San Lorenzo Chico","dias":{"mie":"14:00–19:00","jue":"8:00–20:00","vie":"8:00–20:00","sab":"9:00–16:00"},"destino":"RAQUETA","est":["11 km · 25 min","11 km · 25 min","11 km · 25 min"]},
    {"disciplina":"Pesca","sede":"Dique Cabra Corral","direccion":"Coronel Moldes","dias":{"mie":null,"jue":null,"vie":"6:00–19:00","sab":null},"destino":"DIQUE","est":["100 km · 1 h 45 min","100 km · 1 h 45 min","100 km · 1 h 45 min"]},
    {"disciplina":"Tenis","sede":"Jockey Club de Salta","direccion":"Ruta 51 km 1 (Av. Kennedy s/n), B° Limache","dias":{"mie":"14:00–19:00","jue":"8:00–22:00","vie":"8:00–22:00","sab":null},"destino":"JOCKEY","est":["5 km · 13 min","5 km · 13 min","5 km · 13 min"]},
    {"disciplina":"Tenis de mesa","sede":"Predio Batule – Club Sirio Libanés","direccion":"Ruta Provincial 28 km 22, camino a Lesser","dias":{"mie":null,"jue":"15:00–20:00","vie":"15:00–20:00","sab":null},"destino":"BATULE","est":["25 km · 35 min","25 km · 35 min","25 km · 35 min"]},
    {"disciplina":"Trail nocturno","sede":"Cima del Cerro San Bernardo","direccion":"Av. Ejército del Norte. Según información de Instagram, traslado desde el Complejo Teleférico (Av. San Martín esq. Hipólito Yrigoyen s/n)","dias":{"mie":null,"jue":"18:00–22:00","vie":null,"sab":null},"destino":"TELEF","est":["1,5 km · 5 min","1,5 km · 5 min","1 km · 4 min"]},
    {"disciplina":"Truco","sede":"SUM del CPCES","direccion":"España 1420","dias":{"mie":null,"jue":"20:00–23:00","vie":"20:00–23:00","sab":null},"destino":"SUM","est":["1,5 km · 5 min","1,5 km · 5 min","1,5 km · 5 min"]}
  ]
};

/* ------------------------------------------------------------------ */

const CLAVE_HOTEL = "encuentroSalta2026.hotel";
const TODOS = "todos";

const $hotel = document.getElementById("hotel");
const $disciplina = document.getElementById("disciplina");
const $lista = document.getElementById("lista");
const $contador = document.getElementById("contador");

function mapsUrl(origen, destino) {
  return "https://www.google.com/maps/dir/?api=1" +
    "&origin=" + encodeURIComponent(origen) +
    "&destination=" + encodeURIComponent(destino) +
    "&travelmode=driving";
}

function el(tag, clase, texto) {
  const nodo = document.createElement(tag);
  if (clase) nodo.className = clase;
  if (texto !== undefined) nodo.textContent = texto;
  return nodo;
}

/* Horario con un posible corte de línea después del guion largo (cajitas angostas). */
function escribirHorario(nodo, horario) {
  const partes = horario.split("–");
  nodo.appendChild(document.createTextNode(partes[0] + "–"));
  nodo.appendChild(document.createElement("wbr"));
  nodo.appendChild(document.createTextNode(partes[1]));
}

function crearDia(dia, horario) {
  const li = el("li", "dia " + (horario ? "on" : "off"));
  li.appendChild(el("span", "dia-nombre", dia.etiqueta));
  const hora = el("span", "dia-hora");
  if (horario) {
    escribirHorario(hora, horario);
  } else {
    const guion = el("span", null, "–");
    guion.setAttribute("aria-hidden", "true");
    hora.appendChild(guion);
    hora.appendChild(el("span", "sr-only", "sin actividad"));
  }
  li.appendChild(hora);
  return li;
}

function crearBoton(d, hotel, indice) {
  const est = d.est[indice];
  // Estimaciones largas (ej. "100 km · 1 h 45 min"): se apilan en los 3 botones para que queden parejos.
  const a = el("a", est.length > 16 ? "btn btn-largo" : "btn");
  a.href = mapsUrl(hotel.origen, DATA.destinos[d.destino]);
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label",
    "Cómo llegar a " + d.sede + " en auto desde " + hotel.nombre +
    ", aproximadamente " + est + ". Abre Google Maps.");
  a.dataset.hotel = hotel.id;
  a.dataset.destino = d.destino;
  a.appendChild(el("span", "btn-hotel", hotel.nombre));
  a.appendChild(el("span", "btn-est", "≈ " + est));
  return a;
}

function crearTarjeta(d, hotelElegido) {
  const card = el("article", "card");

  const cab = el("div", "card-cab");
  cab.appendChild(el("h2", null, d.disciplina));
  card.appendChild(cab);

  const cuerpo = el("div", "card-cuerpo");
  cuerpo.appendChild(el("p", "sede", d.sede));
  cuerpo.appendChild(el("p", "direccion", d.direccion));

  const dias = el("ul", "dias");
  DATA.dias.forEach(function (dia) { dias.appendChild(crearDia(dia, d.dias[dia.key])); });
  cuerpo.appendChild(dias);

  if (d.notaMie) cuerpo.appendChild(el("p", "nota", "Mié 28: " + d.notaMie + "."));
  if (d.nota) cuerpo.appendChild(el("p", "nota", d.nota));

  cuerpo.appendChild(el("p", "llegar-titulo", "Cómo llegar en auto (tocá para abrir en Google Maps)"));
  const botones = el("div", "botones");
  DATA.hoteles.forEach(function (hotel, i) {
    if (hotelElegido === TODOS || hotelElegido === hotel.id) {
      botones.appendChild(crearBoton(d, hotel, i));
    }
  });
  cuerpo.appendChild(botones);

  card.appendChild(cuerpo);
  return card;
}

/* ---------- Estado y render ---------- */

function leerHotelGuardado() {
  try {
    const v = window.localStorage.getItem(CLAVE_HOTEL);
    const validos = DATA.hoteles.map(function (h) { return h.id; });
    return validos.indexOf(v) !== -1 ? v : TODOS;
  } catch (e) {
    return TODOS;
  }
}

function guardarHotel(valor) {
  try {
    window.localStorage.setItem(CLAVE_HOTEL, valor);
  } catch (e) { /* si el navegador no deja guardar, no pasa nada */ }
}

function render() {
  const hotel = $hotel.value;
  const filtro = $disciplina.value;
  const lista = DATA.disciplinas.filter(function (d) {
    return filtro === TODOS || d.disciplina === filtro;
  });

  $lista.textContent = "";
  lista.forEach(function (d) { $lista.appendChild(crearTarjeta(d, hotel)); });

  $contador.textContent = "Mostrando " + lista.length + " de " + DATA.disciplinas.length +
    (DATA.disciplinas.length === 1 ? " disciplina" : " disciplinas");
}

function opcion(valor, texto) {
  const o = document.createElement("option");
  o.value = valor;
  o.textContent = texto;
  return o;
}

function iniciar() {
  document.getElementById("actualizacion").textContent = "Última actualización: " + DATA.actualizacion;

  $hotel.appendChild(opcion(TODOS, "Ver los 3 hoteles"));
  DATA.hoteles.forEach(function (h) { $hotel.appendChild(opcion(h.id, h.nombre)); });
  $hotel.value = leerHotelGuardado();

  $disciplina.appendChild(opcion(TODOS, "Todas"));
  DATA.disciplinas.forEach(function (d) { $disciplina.appendChild(opcion(d.disciplina, d.disciplina)); });

  $hotel.addEventListener("change", function () {
    guardarHotel($hotel.value);
    render();
  });
  $disciplina.addEventListener("change", render);

  render();
}

iniciar();
