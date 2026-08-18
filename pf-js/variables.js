/*console.log("Hola mundo")
/**En javascript hay 3 formas de declarar variables 
 * !existe una forma que ya no se recomienda su uso
 * !var
 * Al procceso de crear un variable y darle un valor se llama asignación
 * 
 * A las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
 * ? let nombreVariable = valor;
 * 
 * * el operador = se conoce como operador de asignación
 *  una vez creada una variable podemos usarla en otro lugares del código utilizando su nombre. al ser utilizadas, las variables no van entre comillas " "
 * 
 * las variables que no pueden ser reasignadas, o es decir, que su valor no puede cambiar, se declaran como:
 * ? 
 * 
 * 
 * Nota:
 * Palabras reservadas: son palabras que ultiliza el lenguaje de programación y si intentamos usarlas en otros lados pueden generar errores. 
*/
let nombre =  "anahi"; //tipo string
let name = "Maya"
console.log(nombre);
console.log(name);

const birthYear = 1998; //tipo numero
console.log(birthYear);

/* reasignando una variable (cambiando el valor que tiene)
cuando reasignamos una variable )una variable ya creada)
!ya no es necesario poner let
*/
nombre = "maudette";
console.log(nombre);

/*seccion de prueba*/
/*birthYear = 1996*/

/*Concatenar:
*nos permite pegar el valor de una variable a un texto
*/
console.log("Hola soy " + nombre + "y estoy en gen con" + name + "y nací en el año" + birthYear);
