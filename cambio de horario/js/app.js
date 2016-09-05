//funcio encargada de mostrar la hora
function miReloj(){
	var fecha = new Date();
	var hora = fecha.getHours();
		if (hora < 12) {
			meridiano = "am";
		} else {
			meridiano = "pm";
		}
		hora = hora % 12;
			if (hora === 0) {
				hora = 12;
			}
	var minuto = fecha.getMinutes();
		if (minuto < 10) {
			minuto = "0" + minuto;
		}
	var segundo = fecha.getSeconds();
		if (segundo < 10) {
			segundo = "0" + segundo;
		}
	var horaImprimible = hora + " : " + minuto + " : " + segundo + " " + meridiano;

	document.getElementById("españa").innerHTML= calcTime("+12");
	document.getElementById("mexico").innerHTML= calcTime("+5");
	document.getElementById("australia").innerHTML= calcTime("+20");
	
	document.getElementById('reloj').innerHTML= horaImprimible;
	setTimeout('miReloj()',1000);
}
//funcion cambio de hora

function calcTime(offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return nd.toLocaleString();
}
	


