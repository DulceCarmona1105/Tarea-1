document.getElementById('temas').addEventListener("change", temaSeleccionado);

//Función para inicializar variables y limpiar articulos, y mostrar cajas
function temaSeleccionado() {
    document.getElementById("resultado").innerHTML = "'Somos experiencia culinaria...'";

    //getElementsByTagName convierte en arreglo porque guarda más de un elemento
    capas = document.getElementsByTagName("article");

    //Ocultar varios elementos
    for (i = 0; i < capas.length; i++) {
        capas[i].style.display = "none";
    }

    //Almacenar el dato de la opción del usuario
    var articulo = document.getElementById("temas").value;
    document.getElementById(articulo).style.display = "block";
}



//Trabajo con Nodos
document.getElementById('reservacion').addEventListener("change", function () { mesas(); });
document.getElementById('mostrar').addEventListener("click", function () { mostrar(); });


let mesas = function () {
    let nm = document.getElementById('reservacion').value;
    let contenido = '';
    for (i = 0; i < nm; i++) {
        contenido += '<h3>Mesa: ' + (i + 1) + '</h3>' +
            '<h4> Número de Comensales</h4>' +
            'Adultos: <input type="number" name="adultos" id="adultos' + i + '" min="1" max="4">'
            +'<input type="button" id="env" value="Enviar" onclick="cambio('+i+')">'
            +'<p id="menor'+i+'"></p>'; 
            
    }
    document.getElementById("mesas").innerHTML = contenido;
}

function cambio(i)
            {
                document.getElementById("adultos"+i).disabled = true;
                let na = parseInt(document.getElementById("adultos"+i).value);
                switch (na) {
                    case 1:
                        document.getElementById("menor"+i).innerHTML='Menores: <input type="number" name="menores" id="menores' + i + '" min="1" max="4">'+
                        '<input type="button" id="env2" value="Enviar" onclick="crear('+i+')">'+
                        '<p id="crear"></p>'
                        break;
                    case 2:
                        document.getElementById("menor"+i).innerHTML='Menores: <input type="number" name="menores" id="menores' + i + '" min="1" max="3">'+
                        '<input type="button" id="env2" value="Enviar" onclick="crear('+i+')">'+
                        '<p id="crear"></p>'
                        
                        
                        break;

                    case 3:
                        document.getElementById("menor"+i).innerHTML='Menores: <input type="number" name="menores" id="menores' + i + '" min="1" max="2">'+
                        '<input type="button" id="env2" value="Enviar" onclick="crear('+i+')">'+
                        '<p id="crear"></p>'
                        
                        break;
                    case 4:
                        
                        break;
                
                    default:
                        break;
                }
                
            } 
           function crear(i){
                document.getElementById("menores"+i).disabled = true;
                let nn = document.getElementById('menores'+i).value;
                let contenido2 = '';
                for (i=0;i<nn;i++)
                {
                    contenido2 += '<h5>Menor '+(i+1)+'</h5>'+
                    '<h6>Escriba la edad</h6>'+
                    'Edad: <input type="number" name="edad" id="edad' + i + '" min="1" max="17">'+
                    '<input type="button" id="env3" value="Enviar" onclick="guardar('+i+')">';

                }
                document.getElementById("crear").innerHTML=contenido2;
            }
            function guardar(i){
                document.getElementById("edad"+i).disabled = true;
            }

//Uso de LocalStorage
let mostrar = function () {
    let mesas = document.getElementById("mesas").innerHTML;
    localStorage.setItem('mesa', mesas);
    let cAdultos = document.getElementsByName("adultos");
    let vAdultos = [];
    for (let i = 0; i < cAdultos.length; i++) {
        vAdultos[i] = cAdultos[i].value;
        localStorage.setItem('vAdultos', vAdultos);
    }

    let cMenores = document.getElementsByName("menores");
    let vMenores = [];
    for (let i = 0; i < cMenores.length; i++) {
        vMenores[i] = cMenores[i].value;
        localStorage.setItem('vMenores', vMenores);
    }
    let cEdades = document.getElementsByName("edad");
    let vEdades = [];
    for (let i = 0; i < cEdades.length; i++) {
        vEdades[i] = cEdades[i].value;
        localStorage.setItem('vEdades', vEdades);
    }
    window.open("DatosReservacion.html");
}