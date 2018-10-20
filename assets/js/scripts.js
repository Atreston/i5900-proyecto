var agregar = function () {
    var Prenda = document.getElementById('Prenda').value;
    var Talla = document.getElementById('Talla').value;
    var Cantidad = document.getElementById('Cantidad').value;
    var Precio = document.getElementById('Precio').value;
    var Marca = document.getElementById('Marca').value;
    var Modelo = document.getElementById('Modelo').value;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText==1){ }
        }
    };

    xmlhttp.open("POST", "test.php", true);
    xmlhttp.send();
};