<a name="top"></a>
<div align="center">
<h1>TIPS Y MÉTODOS ÚTILES DE JAVASCRIPT</h1>
</div>

<h2>Índice</h2>

[**TIPS:**](#_Toc42713427)

[1. Utilizar un editor de código profesional](#_Toc42713428)

[2. Aprendizaje libre](#_Toc42713429)

[**MÉTODOS:**](#_Toc42713430)

|[1. Entrada y salida de datos](#_Toc42713431) | [2. typeof](#_Toc42713437) | [3. Métodos para Strings](#_Toc42713438) |
|-|-|-|
| [- console.log()](#_Toc42713432) |   | [- indexOf()](#_Toc42713439)  |
| [- alert()](#_Toc42713433) |  | [- slice()](#_Toc42713440) |
|  [- document.Write()](#_Toc42713434) |  | [- replace()](#_Toc42713441) |
| [- confirm()](#_Toc42713435) |  | [- toUpperCase()](#_Toc42713442) |
| [- prompt()](#_Toc42713436)  |  | [- toLowerCase()](#_Toc42713443) |
|   |  | [- split()](#_Toc42713444) |
| [**4. Métodos para Arrays**](#_Toc42713445)| [**5. Métodos para objetos**](#_Toc42713451) |[**6. Tiempo y fechas**](#_Toc42713454) |
| [- pop()](#_Toc42713446) | [- JSON.parse()](#_Toc42713452) | [- New Date()](#_Toc42713455) |
| [- push()](#_Toc42713447) | [- JSON.stringify()](#_Toc42713453) | [- getFullYear()](#_Toc42713456) |
| [- splice()](#_Toc42713448) |   | [- getMonth()](#_Toc42713457) |
| [- sort()](#_Toc42713449) |   | [- setFullYear() - setMonth()](#_Toc42713458) |
| [- join()](#_Toc42713450) |   |   |
| [**7. Métodos matemáticos**](#_Toc42713459) | [**8. Condición Ternaria**](#_Toc42713463) | [**9. HTML DOM (Document Object Model)**](#_Toc42713464) |
| [- Math.random()](#_Toc42713460) |  | [- Métodos](#_Toc42713465) |
| [- Math.max()](#_Toc42713461) |  | [- Cambiar elementos HTML](#_Toc42713466) |
| [- Math.round()](#_Toc42713462) |  | [- Agregar y eliminar elementos HTML](#_Toc42713467) |
|   |  | [- Algunos ejemplos](#_Toc42713468) |
| [**10. Eventos**](#_Toc42713469) |
| [- onchange()](#_Toc42713470) |
| [- onclick()](#_Toc42713471) |
| [- onmouseover()](#_Toc42713472) |
| [- onmouseout()](#_Toc42713473) |
| [- onkeydown()](#_Toc42713474) |
| [- onload()](#_Toc42713475) |

<a name="_Toc42713427"></a>
**TIPS**:

<a name="_Toc42713428"></a>
**1.  Utilizar un editor de código profesional**

Existen editores muy completos que facilitan el desarrollo de software
debido a sus funcionalidades extras que incluyen, por ejemplo, una
terminal, variedad de plugins para ordenar el código, poner iconos a las
extensiones de los archivos, etc. Entre los editores más usados para
desarrollo web y móvil se encuentran:

-   Visual Studio Code

-   Sublime Text

-   RJ TextEd

-   Light Table

-   Netbeans

-   Brackets

-   Komodo Edit

-   Atom

-   WebStorm

[Subir :point_up:](#top)

<a name="_Toc42713429"></a>
**2.  Aprendizaje libre**

La academia w3schools ofrece tutoriales gratis en su página web
<https://www.w3schools.com/js/default.asp> que puede incluir una
certificación pero ya pagada.

[Subir :point_up:](#top)

<a name="_Toc42713430"></a>
**MÉTODOS:**

<a name="_Toc42713431"></a>
**1.  Entrada y salida de datos**

<a name="_Toc42713432"></a>
-   **console.log()**

>> Imprime mensajes, operaciones, variables, etc. A través de la consola web o interprete de javascript.

>> *Script:*

>> ![](.//media/image1.png)

>> *Consola:*

>> ![](.//media/image2.png)

[Subir :point_up:](#top)

<a name="_Toc42713433"></a>
-   **alert()**

>> Despliega una caja de texto en el navegador.

>> *Script:*

>> ![](.//media/image3.png)

>> *Navegador:*

>> ![](.//media/image4.png)

[Subir :point_up:](#top)

<a name="_Toc42713434"></a>
-  **document.Write()**

>> Esta funcionalidad modifica directamente el index.html del proyecto. Si index.html ya fue cargado completamente, antes de ejecutarse el script, el document.write borrará todo el index.html y lo sustituirá completamente con su contenido. Si el script se ejecuta antes que se complete la carga del index.html, entonces el contenido del document.write solo se añadirá al contenido del index.html.

>-   Document.write antes de que se cargue completamente el index.html

>>>*Html:*

>>> ![](.//media/image5.png)

>>>*Navegador:*

>>> ![](.//media/image6.png)

>-   Document.write ejecutado una vez completada la carga del index.html.

>>> *Html:*

>>> ![](.//media/image7.png)

>>> *Script:*

>>> ![](.//media/image8.png)

>>> *Navegador con carga completa del HTML:*

>>> ![](.//media/image9.png)

>>> Resultado de ejecutar el document.write después de la carga completa
> del Html:

>>> ![](.//media/image10.png)

[Subir :point_up:](#top)

<a name="_Toc42713435"></a>
-   **confirm()**

>> Muestra una ventana con las opciones de aceptar o cancelar. Estas opciones pueden almacenarse en una variable: si la opción escogida es aceptar, devuelve un valor de true; si la opción escogida es cancelar, devuelve un valor de false.

>> *Html:*

>> ![](.//media/image11.png)

>> *Script:*

>> ![](.//media/image12.png)

>> *Navegador -- Confirmar (Aceptar):*

>> ![](.//media/image13.png)

>> ![](.//media/image14.png)

>> ![](.//media/image15.png)

>> *Navegador -- Confirmar (Cancelar):*

>> ![](.//media/image16.png)

>> ![](.//media/image17.png)

[Subir :point_up:](#top)

<a name="_Toc42713436"></a>
-   **prompt()**

>> Esta funcionalidad permite capturar texto desde una ventana similar a la del alert y confirm. Siempre devuelve valores tipo string a menos que se cancele la opción solo ahí será tipo object.

>> *Script:*

>> ![](.//media/image18.png)

>> *Navegador:*

>> ![](.//media/image19.png)

>> *Consola:*

>> ![](.//media/image20.png)

[Subir :point_up:](#top)

<a name="_Toc42713437"></a>
**2.  typeof**

Devuelve el tipo de dato de una variable o de una función. Puede devolver los valores: string, number, boolean, undefined, function y
object.

*Script:*

![](.//media/image21.png)

[Subir :point_up:](#top)

<a name="_Toc42713438"></a>
**3.  Métodos para Strings**

<a name="_Toc42713439"></a>
-   **indexOf()**

>>Encuentra la posición de un caracter en un string.

>>*Script:*

>> ![](.//media/image22.png)

>> *Consola:*

>> ![](.//media/image23.png)

[Subir :point_up:](#top)

<a name="_Toc42713440"></a>
-   **slice()**

>> Este método devuelve parte de un string.

>> *Script:*

>> ![](.//media/image24.png)

>> *Consola:*

>> ![](.//media/image25.png)

[Subir :point_up:](#top)

<a name="_Toc42713441"></a>
-   **replace()**

>> Reemplaza parte de un string con otro string.

>> *Script:*

>> ![](.//media/image26.png)

>> *Consola:*

>> ![](.//media/image27.png)

[Subir :point_up:](#top)

<a name="_Toc42713442"></a>
-   **toUpperCase()**

>> Transforma las letras de un string a mayúsculas.

>> *Script*:

>> ![](.//media/image28.png)

>> *Consola:*

>> ![](.//media/image29.png)

[Subir :point_up:](#top)

<a name="_Toc42713443"></a>
-   **toLowerCase()**

>>Transforma las letras de un string en minúsculas.

>>*Script*:

>> ![](.//media/image30.png)

>> *Consola*:

>> ![](.//media/image31.png)

[Subir :point_up:](#top)

<a name="_Toc42713444"></a>
-   **split()**

>> Transforma un string en un array a partir de un carácter o espacio de división.

>> *Script*:

>> ![](.//media/image32.png)

>> *Consola:*

>> ![](.//media/image33.png)

>-   Se puede limitar el tamaño del nuevo array.

>>> *Script:*

>>> ![](.//media/image34.png)

>>> *Consola*:

>>> ![](.//media/image35.png)

[Subir :point_up:](#top)

<a name="_Toc42713445"></a>
4.  Métodos para Arrays

<a name="_Toc42713446"></a>
-   **pop()**

>> Elimina el último elemento de un array.

>> *Script*:

>> ![](.//media/image36.png)

>> *Consola*:

>> ![](.//media/image37.png)

[Subir :point_up:](#top)

<a name="_Toc42713447"></a>
-   **push()**

>> Agrega un nuevo elemento al Array.

>> *Script*:

>> ![](.//media/image38.png)

>> ![](.//media/image39.png)

>> *Consola*:

>> ![](.//media/image40.png)

[Subir :point_up:](#top)

<a name="_Toc42713448"></a>
-   **splice()**

>> Elimina uno o varios elementos de un Array. *Splice(posición\_del\_item,numero\_de\_elementos\_a\_borrar)*.

>-   Eliminar un elemento.

>>> *Script:*

>>> ![](.//media/image38.png)

>>> ![](.//media/image41.png)

>>> *Consola:*

>>> ![](.//media/image42.png)

>-   Eliminar dos o más elementos.

>>> *Script*:

>>> ![](.//media/image38.png)

>>> ![](.//media/image43.png)

>>> *Consola*:

>>> ![](.//media/image44.png)

[Subir :point_up:](#top)

<a name="_Toc42713449"></a>
-   **sort()**

>> Ordena alfabéticamente un array.

>> *Script*:

>> ![](.//media/image45.png)

>> *Consola*:

>> ![](.//media/image46.png)

[Subir :point_up:](#top)

<a name="_Toc42713450"></a>
-   **join()**

>> Transforma un array en string.

>> *Script*:

>> ![](.//media/image47.png)

>> *Consola:*

>> ![](.//media/image48.png)

>-   Se puede incluir un string adicional dentro de la transformación.

>>> *Script*:

>>> ![](.//media/image49.png)

>>> *Consola*:

>>> ![](.//media/image50.png)

[Subir :point_up:](#top)

<a name="_Toc42713451"></a>
**5. Métodos para objetos**

<a name="_Toc42713452"></a>
-   **JSON.parse()**

>> Transforma un string en un objeto javascript. Esta función recibe dos parámetros: el string y una función. La función es opcional y sirve para realizar cálculos u otras operaciones entre los datos del nuevo objeto por ejemplo:

>> *Script*:

>> ![](.//media/image51.png)

>> *Consola*:

>> ![](.//media/image52.png)}

[Subir :point_up:](#top)

<a name="_Toc42713453"></a>
-   **JSON.stringify()**

>> Transforma un objeto javascript en un string. Esta función recibe tres parámetros: el objeto, una función o array y los espacios antes de cada elemento. La función es opcional al igual que los espacios.

>-   Con función como segundo parámetro.

>>> *Script*:

>>> ![](.//media/image53.png)

>>> *Consola:*

>>> ![](.//media/image54.png)

>-   Con array como segundo parámetro.

>>> *Script*:

>>> ![](.//media/image55.png)

>>> *Consola:*

>>> ![](.//media/image56.png)

[Subir :point_up:](#top)

<a name="_Toc42713454"></a>
**6. Tiempo y fechas**

<a name="_Toc42713455"></a>
-   **New Date()**

>> Obtiene la fecha y la hora actual.

>> *Script*:

>> ![](.//media/image57.png)

>> *Consola*:

>> ![](.//media/image58.png)

[Subir :point_up:](#top)

<a name="_Toc42713456"></a>
-   **getFullYear()**

>> Obtiene el año actual.

>> *Script:*

>> ![](.//media/image59.png)

>> *Consola*:

>> ![](.//media/image60.png)

[Subir :point_up:](#top)

<a name="_Toc42713457"></a>
-   **getMonth()**

>> Devuelve el número del mes, tomando en cuenta que comienza en cero y termina en once.

>> *Script*:

>> ![](.//media/image61.png)

>> *Consola*:

>> ![](.//media/image62.png)

[Subir :point_up:](#top)

<a name="_Toc42713458"></a>
-   **setFullYear() - setMonth()**

>> Cambiar los valores de la fecha actual a cualquiera que se elija.

>> *Script*:

>> ![](.//media/image63.png)

>> *Consola*:

>> ![](.//media/image64.png)

[Subir :point_up:](#top)

<a name="_Toc42713459"></a>
**8.  Métodos matemáticos**

<a name="_Toc42713460"></a>
-   **Math.random()**

>> Te devuelve un número aleatorio entre 0 y 1.

>> *Script*:

>> ![](.//media/image65.png)

>> *Consola*:

>> ![](.//media/image66.png)

>-   Función para devolver un número real aleatorio dentro de un rango.

>>> *Script*:

>>> ![](.//media/image67.png)

>>> *Consola*:

> ![](.//media/image68.png)

>-   Función para devolver un numero entero dentro de un rango.

>>> *Script*:

>>> ![](.//media/image69.png)

>>> *Consola*:

>>> ![](.//media/image70.png)

[Subir :point_up:](#top)

<a name="_Toc42713461"></a>
-   **Math.max()**

>> Devuelve el valor más alto entre un conjunto de valores.

>> *Script*:

>> ![](.//media/image71.png)

>> *Consola*:

>> ![](.//media/image72.png)

>-   Para devolver el valor máximo de un array podemos hacerlo de dos formas:

>>> *Script*:

>>> ![](.//media/image73.png)

>>> *Consola*:

>>> ![](.//media/image74.png)

[Subir :point_up:](#top)

<a name="_Toc42713462"></a>
-   **Math.round()**

>> Devuelve el valor entero más cercano al número real solicitado.

>> *Script*:

>> ![](.//media/image75.png)

>> *Consola*:

>> ![](.//media/image76.png)

[Subir :point_up:](#top)

<a name="_Toc42713463"></a>
**8.  Condición Ternaria**

Esta operación contiene tres operandos en el cual: el primero es una condición (true o false), el segundo es la sentencia a ejecutar si la condición es verdadera, el tercero es la sentencia a ejecutar si la condición es falsa.

-   Condición ternaria simple: Contiene solo una condición.

>> *Script*:

>> ![](.//media/image77.png)

>> *Consola*:

>> ![](.//media/image78.png)

-   Condición ternaria múltiple: Contiene dos o más condiciones.

>> *Script*:

>> ![](.//media/image79.png)

>> *Consola*:

>>![](.//media/image80.png)

[Subir :point_up:](#top)

<a name="_Toc42713464"></a>
**10. HTML DOM (Document Object Model)**

Con el modelo de objetos, JavaScript permite crear HTML dinámico:

<a name="_Toc42713465"></a>
-   **Métodos:**

    -   getElementById(*id*): Encuentra un elemento por su id.

    -   getElementsByTagName(*Tag\_name*): Encuentra un elemento por su
        etiqueta.

    -   getElementsByClassName(*Class\_name*): Encuentra un elemento por
        su clase.

[Subir :point_up:](#top)

<a name="_Toc42713466"></a>
-   **Cambiar elementos HTML:**

    -   Elemento.innerHTML: Cambia el contenido del elemento HTML
        buscado.

    -   Elemento.attribute: Cambia el atributo del elemento HTML
        buscado.

    -   Elemento.style*.property:* Cambia el estilo del elemento HTML
        buscado.

    -   Elemento.setAttribute(Atributo,valor): Cambia el valor de un
        atributo del elemento HTML buscado.

[Subir :point_up:](#top)

<a name="_Toc42713467"></a>
-   **Agregar y eliminar elementos HTML:**

    -   Document.createElement(Elemento): Crea un elemento HTML.

    -   Document.removeChild(Elemento): Elimina un elemento HTML.

    -   Document.appendChild(Elemento): Añade un elemento HTML.

    -   Document.replaceChild(nuevo,antiguo): Reemplaza un elemento
        HTML.

    -   Document.write(texto): Escribe directamente en el HTML.

[Subir :point_up:](#top)

<a name="_Toc42713468"></a>
-   **Algunos ejemplos:**

>-  **getElementById() con innerHTML**

>>> *Script*:

>>> ![](.//media/image81.png)

>>> *Html*:

>>> ![](.//media/image82.png)

>>> *Navegador*:

>>> ![](.//media/image83.png)

>- **createElement() y appendChild()**

>>> *Script:*

>>> ![](.//media/image84.png)

>>> *Navegador*:

>>> ![](.//media/image85.png)

>-   **removeChild()**

>>> *Script:*

>>> ![](.//media/image86.png)

>>> *Html:*

>>> ![](.//media/image87.png)

>-  **replaceChild()**

>>> *Script:*

>>> ![](.//media/image88.png)

>>> *Html*:

>>> ![](.//media/image89.png)

>>> *Navegador:*

>>> ![](.//media/image90.png)

[Subir :point_up:](#top)

<a name="_Toc42713469"></a>
10. **Eventos**

<a name="_Toc42713470"></a>
-   **onchange()**

>> Se ejecuta cuando el valor de una etiqueta HTML cambia.

>> *Script*:

>> ![](.//media/image91.png)

>> *Html*:

>> ![](.//media/image92.png)

>> *Navegador*:

>> ![](.//media/image93.png)

>> ![](.//media/image94.png)

[Subir :point_up:](#top)

<a name="_Toc42713471"></a>
-   **onclick()**

>> Se ejecuta cuando se da click sobre alguna etiqueta HTML.

>> *Script*:

>> ![](.//media/image95.png)

>> *Html*:

>> ![](.//media/image96.png)

>> *Navegador*:

>> ![](.//media/image97.png)

[Subir :point_up:](#top)

<a name="_Toc42713472"></a>
-   **onmouseover()**

>> Se ejecuta cuando se pasa el cursor del mouse por la etiqueta HTML seleccionada.

>> *Script*:

>> ![](.//media/image98.png)

>> *Html*:

>> ![](.//media/image99.png)

>> *Navegador*:

>> ![](.//media/image100.png)

[Subir :point_up:](#top)

<a name="_Toc42713473"></a>
-   **onmouseout()**

>> Se ejecuta cuando el cursor del mouse sale de la etiqueta HTML.

>> *Script*:

>> ![](.//media/image101.png)

>> *Html*:

>> ![](.//media/image102.png)

>> *Navegador*:

>> ![](.//media/image103.png)

>> ![](.//media/image104.png)

[Subir :point_up:](#top)

<a name="_Toc42713474"></a>
-   **onkeydown()**

>> Se ejecuta al presionarse una tecla dentro de la etiqueta HTML seleccionada.

>> *Script*:

>> ![](.//media/image105.png)

>> *Html*:

>> ![](.//media/image106.png)

>> *Navegador*:

>> ![](.//media/image107.png)

>> ![](.//media/image108.png)

[Subir :point_up:](#top)

<a name="_Toc42713475"></a>
-   **onload()**

>> Se ejecuta cuando se termina de cargar la etiqueta HTML seleccionada.

>> *Script*:

>> ![](.//media/image109.png)

>> *Html*:

>> ![](.//media/image110.png)

>> *Navegador*:

>> ![](.//media/image111.png)

[Subir :point_up:](#top)