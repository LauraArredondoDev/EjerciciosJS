//En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua. Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.

const menu1 = 'carne';
const menu2 = 'pescado';
const menu3 = 'verdura';

switch (menu1) {
  case 'carne':
    console.log('¿Desea beber vino tinto?');
    break;
    
  case 'pescado':
    console.log('¿Desea beber vino blanco?');
    break;
  
  case 'verdura':
    console.log('¿Desea beber agua?');
    break;
    
  default:
    console.log('Tiene que elegir un menú del restaurante');
    break;
} 


//Aprtir de un número de mes tecleado por un usuario el programa debe indicar la estación del año. Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño.

let inv = '12, 1, 2';
let prim = '3, 4, 5';
let ver = '6, 7, 8';
let oto = '9, 10, 11';

switch (ver) {
  case '12, 1, 2':
    console.log ('Estamos en invierno');
    break;
    
  case '3, 4, 5':
    console.log ('Estamos en primavera');
    break;
    
  case '6, 7, 8':
    console.log ('Estamos en verano');
    break;
    
  case '9, 10, 11':
    console.log ('Estamos en otoño');
    break;
    
  default:
    console.log ('Introduce un mes válido');
    break;
}

//otra forma de hacerlo
const mes = 1;

switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log ('Estamos en invierno');
    break;
    
  case 3:
  case 4:
  case 5:
    console.log ('Estamos en primavera');
    break;
    
  case 6:
  case 7:
  case 8:
    console.log ('Estamos en verano');
    break;
    
  case 9:
  case 10:
  case 11:
    console.log ('Estamos en otoño');
    break;
    
  default:
    console.log ('Introduce un mes válido');
    break;
}









