
//VALIDAR CAMPO FORMULARIO

function validacion(){
	//se llaman ids de inputs
	var mail = document.getElementById("exampleInputEmail1").value;
	var contrasena = document.getElementById("exampleInputPassword1").value;
	var boton = document.getElementById("boton");


	//valida correo
	function correo(){ 
		if(mail === ""){
			var contenedor = document.getElementsByClassName("input-box")[2];
			var span = document.createElement("span");
			var texto = document.createTextNode("Campo obligatorio");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(mail))){
			var contenedor = document.getElementsByClassName("input-box")[2];
			var span = document.createElement("span");
			var texto = document.createTextNode("Debe ser un correo válido");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}
	}
	correo();

	function password(){
		if(contrasena === ""){
			var contenedor = document.getElementsByClassName("input-box")[2];
			var span = document.createElement("span");
			var texto = document.createTextNode("Campo obligatorio");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/){
			var contenedor = document.getElementsByClassName("input-box")[2];
			var span = document.createElement("span");
			var texto = document.createTextNode("Debe ser una contraseña de 6 o mas caracteres");
			span.appendChild(texto);
			contenedor.appendChild(span);
			return false;
		}
	}
	password();
}









