// Función para mostrar/ocultar placeholder
var htmlOutBox = document.querySelector('.encriptador__output_div').innerHTML;

function updatePlaceholder() {
    
    const editableDiv = document.querySelector('.editable-div');
    if (editableDiv.innerText.trim() === '') {
        editableDiv.innerHTML = '<span class="placeholder">Ingrese el texto aquí</span>';
    }
}

function updateIngresaTextAEncriptar() {
    const divAOcultarOMostrar = document.querySelector('.encriptador__output_div');
    const editableDiv = document.querySelector('.editable-div');
    if (editableDiv.innerText.trim() === '')  {
        divAOcultarOMostrar.innerHTML = '<p class="encriptador__output_p" >Ingresa el texto que desees encriptar o desencriptar.</p>';
    }else{
        divAOcultarOMostrar.innerHTML = '';
    }
}

function mostrarBotonCopiar() {
    const botonCopiar = document.getElementById("copiar");
    botonCopiar.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const editableDiv = document.querySelector('.editable-div');
    // Mostrar placeholder inicialmente
    updatePlaceholder();
    // Ocultar placeholder al hacer click
    editableDiv.addEventListener('focus', function() {
        if (editableDiv.innerText.trim() === 'Ingrese el texto aquí') {
            editableDiv.innerText = '';
        }
    });

    // Eliminar la placeholder si el usuario escribe algo
    editableDiv.addEventListener('input', function() {
        if (editableDiv.innerText.includes('Ingrese el texto aquí')) {
            editableDiv.innerHTML = editableDiv.innerText.replace('Ingrese el texto aquí', '');
        }
    });
});

function Encriptar() {
    const texto = document.querySelector('.editable-div').innerText.trim();
    if (texto === 'Ingrese el texto aquí' || texto === '') {
        alert('Por favor, ingrese algún texto.');
        return;
    }
    updateIngresaTextAEncriptar();
    let resultado= "";
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        switch (caracter) {
            case "a":
                resultado=resultado + "ai";
                break;
            case "e":
                resultado=resultado + "enter";
                break;
            case "i":
                resultado=resultado + "imes";
                break;
            case "o":
                resultado=resultado + "ober";
                break;
            case "u":
                resultado=resultado + "ufat";
                break;        
            default:
                resultado=resultado + caracter;
                break;
        }
        
    }
       
    let parrafoResult = document.querySelector('.encriptador__output');
    htmlOutBox = parrafoResult.innerHTML;
    parrafoResult.innerHTML = resultado 
    mostrarBotonCopiar()
} 

function Desencriptar() {
    const texto = document.querySelector('.editable-div').innerText.trim();
    if (texto === 'Ingrese el texto aquí' || texto === '') {
        alert('Por favor, ingrese algún texto.');
        return;
    }
    updateIngresaTextAEncriptar();
    let resultado ="";
    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        switch (caracter) {
            case "a":
                resultado=resultado + "a";
                i++; //salteo la siguiente letra porque es una i
                break;
            case "e":
                resultado=resultado + "e";
                i=i+4; //salteo las siguientes letras porque son nter
                break;
            case "i":
                resultado=resultado + "i";
                i=i+3; //salteo las siguientes letras porque son mes
                break
            case "o":
                resultado=resultado + "o";
                i=i+3; //salteo las siguientes letras porque son ber
                break;
            case "u":
                resultado=resultado + "u";
                i=i+3; //salteo las siguientes letras porque son fat
                break;        
            default:
                resultado=resultado + caracter;
                break;
        }
        
    }
   
    let parrafoResult = document.querySelector('.encriptador__output');
    parrafoResult.innerHTML = resultado;s
}

function copiar() {
    const output = document.querySelector('.encriptador__output').innerText;
    navigator.clipboard.writeText(output).then(() => {
        alert('Texto copiado al portapapeles');
    });
}