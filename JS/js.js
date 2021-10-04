function f1() {
    var res = "Tarjeta navideña";
    document.getElementById("resultado").innerHTML = res;
}
function f2() {
    var res = "Tarjeta de la independencia";
    document.getElementById("resultado").innerHTML = res;
}
function f3() {
    var res = "Tarjeta del programador";
    document.getElementById("resultado").innerHTML = res;
}
function f4() {
    document.getElementById("imgg").src = "img/mnav.png";
}
function f5() {
    document.getElementById("imgg").src = "img/mind.png";
}
function f6() {
    document.getElementById("imgg").src = "img/mpro.png";
}
function f7() {
    document.getElementById("imgg2").src = "img/imgnav.jpg";
}
function f8() {
    document.getElementById("imgg2").src = "img/imgind.png";
}
function f9() {
    document.getElementById("imgg2").src = "img/imgpro.jpg";
}
function c() {
    var colo = document.getElementById("ctarj").value;
    
    document.getElementById("color2").style.backgroundColor=colo;   
}
function enviar() {
    var nomb=document.getElementById("nombre").value;
    document.getElementById("nom").innerHTML=nomb;
    var ti=document.getElementById("felicitacion").value;
    document.getElementById("feli").innerHTML=ti;
    var d=document.getElementById("desc").value;
    document.getElementById("des").innerHTML=d;
}

document.getElementById('mostrar').addEventListener("click", function () { mostrar(); });
let mostrar = function () {

    /* var nom = document.getElementById("nom").value;
    console.log(nom);
    localStorage.setItem('nombre',nom);
     */
    var caja = document.getElementById("caja").innerHTML;
    localStorage.setItem('caj', caja);
    var resultado = document.getElementById("resultado").innerHTML;
    localStorage.setItem('resu', resultado);
    let color2 = document.getElementById("color2").innerHTML;
    localStorage.setItem('co2', color2);
    let imga = document.getElementById("imga").innerHTML;
    localStorage.setItem('im', imga);
    let imgg = document.getElementById("imgg").innerHTML;
    localStorage.setItem('im1', imgg);
    let imgg2 = document.getElementById("imgg2").innerHTML;
    localStorage.setItem('im2', imgg2);
    var nom=document.getElementById("nombre").value;
    localStorage.setItem('no', nom);
    document.getElementById("nom").innerHTML;
    let feli = document.getElementById("feli").innerHTML;
    localStorage.setItem('fel', feli);
    let des = document.getElementById("des").innerHTML;
    localStorage.setItem('de', des); 
    
    window.open("t.html");
}
    

