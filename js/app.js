/*Colocamos un bowl 
Añadir 400 gramos de harina de trigo
Añadir 200 ml de agua tibia
Añadir 2 cucharadas de aceite de oliva
Añadir 15 gramos de levadura fresca
Añadir 10 gr. de sal
Mezclar todo
Dejar reposar 20 min. en cámara cerrada para que fermente
Alisar hasta darle un grosor de 0,5 cm y forma redonda con un rodillo de cocina
Pinchar la masa
Añadir 200 ml de tomate triturado repartido por toda la base 
Añadir 150 gr jamón york troceado repartido por toda la base
Añadir 150 gr queso rallado repartido por toda la base
Añadir 15 gr de orégano seco repartido por toda la base
Introducir al horno 20 min a 180 º con calor por arriba y por abajo
Sacamos del horno.*/

let bowl = "bowl";
let GrSalt = 10; 
let GrFlour = 400;
let MlWater = 200;
let SpoonOliveOil = 2;
let Gryeast = 15;
let MlTomato = 200;
let GrHam = 150;
let GrCheese = 150;
let GrOregano = 15;
let MinRestTime= 20;
let CelsusTemperature = 180;


function MakePizza() {
    document.write("Colocamos en un"," ",bowl, ":");
    document.write("Añadir", GrFlour,"gr de harina de trigo.");
    document.write("Añadir", MlWater,"ml de água tibia.");
    document.write("Añadir", SpoonOliveOil,"cucharadas de aceite de oliva.");
    document.write("Añadir", Gryeast," gramos de levadura fresca.");
    document.write("Añadir", GrSalt," gramos de sal.");
    document.write("Mezclar todo.");
    document.write("Dejar reposar", MinRestTime,"min. en cámara cerrada para que fermente.");
    document.write("Alisar hasta darle un grosor de 0,5 cm y forma redonda con un rodillo de cocina.");
    document.write("Pinchar la masa.");
    document.write("Añadir", MlTomato,"ml de tomate triturado repartido por toda la base." );
    document.write("Añadir", GrHam," gramos de jamón york troceado repartido por toda la base.");
    document.write("Añadir", GrCheese,"gramos de queso rallado repartido por toda la base.");
    document.write("Añadir", GrOregano," gramos de orégano seco repartido por toda la base.");
    document.write("Introducir",MinRestTime , "min. a", CelsusTemperature ,"ºC con calor por arriba y por abajo.");
    document.write("Sacar del horno.");



}

MakePizza();