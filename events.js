class EventEmitter{
	constructor(){
		this.escuchadores = new Map();
		
	}

	emit(nombreev, argumentos){
			
			
					return this.escuchadores.get(nombreev)(argumentos);
			

	};
	on(nombre, funcion){
		
		this.escuchadores.set(nombre,funcion);
		

	};




}

exports = module.exports = EventEmitter;
