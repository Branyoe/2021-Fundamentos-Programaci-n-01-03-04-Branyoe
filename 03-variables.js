const PI = 3.1415;

//Definición***********************************
function printTypeOfVariables() { 
  let name = 'Merlon'; //string
  let age = 1000; //number
  let isStudent = true; //boolen

  console.log(name, typeof name);
  console.log(age, typeof age);
  print(isStudent); // reutilización de código
}

function print(variable) { // definición
  console.log(variable, typeof(variable));
}

const testUpdateConstant = function() { // función como expreción
  PI = 22; // error al modificar una constante
}

//Llamado************************************+
printTypeOfVariables();

let dato = true
print(dato);
print(32);

testUpdateConstant();