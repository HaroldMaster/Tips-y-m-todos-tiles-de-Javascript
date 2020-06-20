//1. ENTRADA Y SALIDA DE DATOS
    //1.1 CONSOLE.LOG()
        //Mensajes
        console.log("Imprime mensajes");
        //Operaciones
        console.log(2*3/4+5-9);
        //Variables (Arreglos, Objetos)
        var arreglo = ["string",1,2.3];
        var objeto = {nombre:"Harold", apellido:"Flores"}
        console.log(arreglo[0]);
        console.log(objeto.nombre);
        //Funciones
        function suma (x,y){
            return x+y;
        }
        console.log(suma(4,9));

    //1.2 ALERT
    alert("Esto es un alert");
    //1.3 DOCUMENT.WRITE
    function documento (){
    document.write("Esto es un document.write desde el script");
    }
    //1.4 CONFIRM
    function confirmar() {
    var confirmar = confirm("Esto es un confirm");
        if (confirmar==true){
            document.getElementById("confirmar").innerHTML="CONFIRMADO!!";
        }
        else {
            document.getElementById("confirmar").innerHTML="DENEGADO :(";
        }
    }
    //1.5 PROMPT
    var valor = prompt("Ingrese un valor: ");
    console.log("El tipo de dato de un prompt siempre es un: "+typeof valor);

    console.log("\n");

//2. TYPEOF

    var string = typeof "Harold";                 //String
    var number = typeof 3;                        //Number
    var booleanTrue = typeof true;                //Boolean
    var booleanFalse = typeof false;              //Boolean
    var undefined = typeof x;                     //Undefined
    var object = typeof {nombre:"Harold",         //Object
                         apellido:"Flores"};
    var functions = typeof function suma () {};   //Function
    console.log(string+"\n"+number+"\n"+
                booleanTrue+"\n"+booleanFalse+"\n"+
                undefined+"\n"+object+"\n"+functions+"\n");

//3.METODOS PARA STRINGS

    //INDEXOF
    var nombre= "Harold"
    var busqueda = nombre.indexOf("l");
    console.log(busqueda);
    //SLICE
    nombre = "Harold Flores"
    var slice = nombre.slice(7,13);
    console.log(slice);
    //REPLACE
    var replace = nombre.replace("Harold","Bryan");
    console.log(replace);
    //UPPER CASE
    var toUpper = nombre.toUpperCase();
    console.log(toUpper);
    //LOWER CASE
    var toLower = nombre.toLowerCase();
    console.log(toLower);
    //SPLIT
    var ejemplo_split = "Si, esto es un ejemplo";
    var split_espacios = ejemplo_split.split(" ",2);
    var split_caracter = ejemplo_split.split(",");
    console.log(split_espacios);
    console.log(split_caracter);

    console.log("\n");

//4. METODOS PARA ARRAYS

    //POP
    var ciudad = ["Quito", "Guayaquil", "Cuenca"];
    var eliminarUltimo = ciudad.pop();
    console.log("El elemento eliminado por pop() es: " + eliminarUltimo);
    console.log("El nuevo array es: "+ ciudad);
    //PUSH
    var push = ciudad.push("Loja");
    console.log(ciudad);
    //SPLICE EJEMPLO 1
    var spliceUno = ciudad.splice(1,1);
    console.log("La ciudad eliminada es: "+spliceUno);
    console.log("El array actual es: "+ciudad);
    //SPLICE EJEMPLO2
    var spliceDos = ciudad.splice(1,2);
    console.log("Las ciudades eliminadas son: "+spliceDos);
    console.log("El array actual es: "+ciudad);
    //SORT
    ciudad.sort();
    console.log("El array ordenado alfabéticamente es: "+ciudad);
    //JOIN
    ciudad = ["Quito", "Guayaquil", "Cuenca"];
    var join = ciudad.join(" - ");
    console.log(join);

    console.log("\n");

//5.MÉTODOS PARA OBJETOS
    //JSON.PARSE
    var objeto_parse = '{"Nombre":"Harold", "Apellido":"Flores"}';
    var json_parse = JSON.parse(objeto_parse,function (key,value){
        if(key=="Nombre"){
            return value.toUpperCase();
        } else {
            return value;
        }});
    console.log(json_parse);
    //JSON.STRINGIFY - funcion <pre>
    var objeto_stringify = {"Nombre":"Harold", "Apellido":"Flores"};
    var json_stringify = JSON.stringify(objeto_stringify,function (key,value){
        if(key=="Nombre"){
            return value.toUpperCase();
        } else {
            return value;
        }},10)
    console.log(json_stringify);
    //JSON.STRINGIFY - array
    var objeto_stringify = {"Nombre":"Harold", "Apellido":"Flores"};
    var json_stringify = JSON.stringify(objeto_stringify,["Apellido"],"Espacio")
    console.log(json_stringify);

    console.log("\n");

//5.TIEMPO Y FECHA

    //NEW DATE()
    var date = new Date();
    console.log("La fecha y hora actual es: "+date);
    //GETFULLYEAR
    console.log("El año actual es: " + date.getFullYear());
    //GETMONTH
    var month = date.getMonth();
    var monthName;
    switch(month){
        case 5:
            monthName="Junio";
    }
    console.log("El mes actual es: "+monthName);
    //SETFULLYEAR - SETMONTH
    date.setFullYear(2021);
    date.setMonth(6);
    console.log("La nueva fecha es: "+date);

    console.log("\n");

//6.METODOS MATEMÁTICOS
    //MATH.RANDOM
    var aleatorio = Math.random();
    console.log(aleatorio);
    //FUNCION NUMEROS REALES ALEATORIOS DENTRO DE UN RANGO
    function numerosRandomicos (min,max) {
        return Math.random()*(max-min)+min;
    }
    console.log(numerosRandomicos(20,30));
    //FUNCION NUMEROS ENTEROS ALEATORIOS DENTRO DE UN RANGO
    function numerosRandomicosEnteros (min,max) {
        return Math.floor(Math.random()*(max-min)+min);
    }
    console.log(numerosRandomicosEnteros(20,30));
    //MATH.MAX
    var maximo = Math.max(1,23,44,123,12,443,39);
    console.log(maximo);
    //MATH.MAX.APPLY - MATH.MAX(...ARRAY)
    var array = [1,2,3,43,12,4444,22];
    var maximoArray = Math.max.apply(null,array);
    var maximoArrayDos = Math.max(...array);
    console.log("Primer metodo: "+maximoArray);
    console.log("Segundo metodo: "+maximoArrayDos);
    //MATH.ROUND
    var roundUno = Math.round(5.3);
    var roundDos = Math.round(5.5);
    var roundTres = Math.round(5.8);
    console.log("El valor 5.3 redondeado es: "+roundUno);
    console.log("El valor 5.5 redondeado es: "+roundDos);
    console.log("El valor 5.8 redondeado es: "+roundTres);

//CONDICION TERNARIA

    //CONDICION TERNARIA SIMPLE
    var edad = 20;
    var verificarEdad = (edad < 18) ? "Menor de edad" : "Mayor de edad"; 
    console.log(verificarEdad);
    //CONDICION TERNARIA MULTIPLE
    var promedio = 3;
    var estadoEstudiante = (promedio >= 7) ? "Aprobado" : (promedio < 4) ? "Reprobado" : "Supletorio";
    console.log(estadoEstudiante);

//DOM
    //INNERHTML
    var x = document.getElementById("titulo");
    document.getElementById("DOM").innerHTML = "El título traido desde el DOM es: "+x.innerHTML;
    //CREATEELEMENT Y APPENDCHILD
    var y = document.createElement("h1")
    y.innerHTML = "Creando un elemento HTML y añadiendolo al body";
    document.body.appendChild(y);
    //REMOVECHILD
    var z =  document.getElementById("subtitulo")
    document.body.removeChild(z);
    //REPLACECHILD FORMA1
    textnode = document.createTextNode(date);
    var item = document.getElementById("fecha");
    item.replaceChild(textnode,item.childNodes[0]);
    //REPLACECHILD FORMA2
    var elementoHTML = document.createElement("h1");
    var textnode = document.createTextNode("FUNCIONES, METODOS Y TIPS UTILES DE JAVASCRIPT");
    elementoHTML.appendChild(textnode);
    var item = document.getElementById("titulo");
    item.replaceChild(elementoHTML, item.childNodes[0]);

//EVENTOS
    //ONCHANGE
    function cambio() {
        var datos = document.getElementById("evento1").value;
        var mayusculas = datos.toUpperCase();
        document.getElementById("evento1").value = mayusculas;
    }
    //ONCLICK
    function dandoClick() {
        document.getElementById("evento2").innerHTML="Se ejecutó el evento onclick";
    }
    //ONMOUSEOVER
    function cursorEncima() {
        document.getElementById("evento3").title="Se esta pasando el cursor por encima de la eiqueta";
    }
    //ONMOUSEOUT
    function cursorFuera() {
        document.getElementById("evento4").innerHTML="Cursor Fuera";
    }
    //ONKEYDOWN
    function presionarTeclas() {
        document.getElementById("evento5_2").innerHTML = "Escribiendo...";
    }
    //ONLOAD
    function carga() {
        document.getElementById("evento6").innerHTML = "Pagina cargada";
    }