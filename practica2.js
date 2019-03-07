
const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./programador');


// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

// Creamos un Programador
let prog= [{hora: "17:54",temperatura: 22 }, 
 {hora: "11:15",temperatura: 18},
 {hora: "18:39",temperatura: 23}, 
 {hora: "15:47",temperatura: 28}];
const programador = new Programador(prog);


// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

// Configurar la temp ideal a 20 grados
termostato.indicarTemperaturaIdeal(20);

// Encender el termostato:
termostato.encender();

//Programador

programador.on('ideal', function(tempIdeal) { termostato.indicarTemperaturaIdeal(tempIdeal);});


programador.programar();