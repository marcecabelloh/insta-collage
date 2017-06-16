

//api drag and drop

function drag(ev){ //ev de event es lo mismo, los atributos pueden variar
	ev.dataTransfer.setData('text', ev.target.id);
	//img se lee como text en el navegador
	//target es el objetivo 
}


function finalDrop(ev){
	ev.preventDefault(); 
	//SIEMPRE se pondrá esto 

}

function drop(ev){
	ev.preventDefault();
	var dato = ev.dataTransfer.getData('text');
	//getData trae.. sin el ev.target.id
	ev.target.appendChild(document.getElementById(dato));	
}
