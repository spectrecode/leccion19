window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var soles = parseInt(document.getElementById("soles").value);
		var cambio = parseInt(document.getElementById("cambio").value);

		var resultado = document.getElementById("resultado");

		if (cambio && soles) {
			resultado.innerHTML = "<p>El resultado es " + convertidor(soles,cambio) + " dolares</p>";
		} 
		else {
   			resultado.innerHTML="<p>No haz ingresado números</p>";
     	}
	});

	function convertidor(soles, cambio) {
		var total = (soles/cambio).toFixed(2);
		return total;
	}
}) 

/*function calcular(soles, cambio){
	if((soles != '' && !isNaN(soles)) && (cambio != '' && !isNaN(cambio))){
		document.write(parseFloat(soles * cambio).toFixed(2));
	}
}*/