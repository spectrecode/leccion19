window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var producto = parseInt(document.getElementById("producto").value);
		var cantidad = parseInt(document.getElementById("cantidad").value);
		var descuento = parseInt(document.getElementById("descuento").value);
<<<<<<< HEAD
			if (producto && cantidad && descuento) {
			var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>El costo con descuento es de " + convertidor(producto,cantidad,descuento) + " soles</p>";
		} else {
	   		resultado = document.getElementById("resultado");
	   		resultado.innerHTML="<p>No haz ingresado números</p>";
     }
	});

	function convertidor(producto, cantidad, descuento) {
		var proforma = (producto * cantidad) - (producto * cantidad*descuento/100);
	//	var total = proforma.toFixed(2);
		return proforma;
=======

		var resultado = document.getElementById("resultado");		
		if (producto && cantidad && descuento) {			
			resultado.innerHTML = "<p>Lacuenta total es  " + convertidor(producto,cantidad,descuento) + " Soles</p>";
		} else {
	   		resultado.innerHTML="<p>No haz ingresado números</p>";
     	}
	});

	function convertidor(producto, cantidad, descuento) {
		var proforma = (producto*cantidad)-(producto*cantidad*descuento)/100 ;
		var total = proforma.toFixed(2);
		return total;
>>>>>>> master
	}
})