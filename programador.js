//Importar modulo EventEmitter
const EventEmitter = require('./events');
// Importar modulo Later.js:
const later = require('later');



//Definicion clase Programador 
class Programador extends EventEmitter {


	constructor(programador) {
	super();
	this.programad = programador;
	this.temperatura=20;
	

	};
	
	

	programar(){

	var i;
	
	// Usar zona horaria local:
	later.date.localTime();
	
	this.programad.forEach((element)=>{



 	var sched= later.parse.text('at '+ element.hora);
 
 	
 
	later.setInterval(() => this.emit('ideal',element.temperatura),sched);
	
 
 	
 	});


};
	


}

exports = module.exports = Programador;

