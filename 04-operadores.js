// //YOUR_CODE*************************************************
// //**********definición¨*************************************
//   //Suma
// function sum(a, b){
//   let suma = a + b;

//   return suma;
// }
//   //resta
// function subtract(a, b){
//   let resta = a - b;

//   return resta;
// }
//   //multipicación
// function multiply(a, b){
//   let multipicacion = a * b;

//   return multipicacion;
// }
//   //Division
// function divide(a, b) {
//   let division = a / b;

//   return division;
// }
//   //Residuo
// function remainder(a, b) {
//   let residuo = a % b;

//   return residuo;
// }

//MY_CODE***************************************************
//**********definición¨*************************************
const sum = (a, b) => {
  return a + b;
}

 //*Función resta con funciones como expreción------------
const subtract = (a, b) => {
  return a - b;
}

  //*función multiplicación con funciones clasicas---------
const multiply = (a, b) => {
  return a * b;
}

  //*Función divicion con arrow function-------------------
const divide = (a, b) => {
  return a / b;
}

  //*¨Función residuo con función como expreción-----------
  const remainder = (a, b) => {
    return a % b;
  }

//**************LLamado*************************************
  //Suma--------------------------------------
console.log('Función suma******************');
console.log(sum(4, 2));

  //Resta-------------------------------------
console.log('Función resta***************************');
console.log(subtract(4, 5));

  //Multiplicación----------------------------
console.log('Función multiplicación******************');
console.log(multiply(2, 3));

  //Divición----------------------------------
console.log('Función division************************');
console.log(divide(9-3, 3));

  //Residuo-----------------------------------
console.log('Fuinción residuo************************');
console.log(remainder(9, 2));