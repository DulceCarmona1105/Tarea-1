(function () {
    /* let n = localStorage.getItem('nombre');
    console.log(n);
    document.getElementById("nombre").value = n; */
    document.getElementById("caja").innerHTML = localStorage.getItem('caj');
    document.getElementById("resultado").style.display = "block";
    document.getElementById("resultado").innerHTML = localStorage.getItem('resu');
    document.getElementById("color2").style.display = "block";
    document.getElementById("color2").innerHTML = localStorage.getItem('co2');
    document.getElementById("imga").style.display = "block";
    document.getElementById("imga").innerHTML = localStorage.getItem('im');
    document.getElementById("imgg").style.display = "block";
    document.getElementById("imgg").innerHTML = localStorage.getItem('im1');
    document.getElementById("imgg2").style.display = "block";
    document.getElementById("imgg2").innerHTML = localStorage.getItem('im2');
    var nombre = localStorage.getItem("no");
    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("feli").style.display = "block";
    document.getElementById("feli").innerHTML = localStorage.getItem('fel');
    document.getElementById("des").style.display = "block";
    document.getElementById("des").innerHTML = localStorage.getItem('de'); 

})();