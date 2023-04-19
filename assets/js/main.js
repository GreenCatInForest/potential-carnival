const numberCurrent = document.parseInt(
  document.getElementById(numberCurrent).value
);
const baseCurrent = 2;
const baseToConvert = 3;

const getConvert = () => {
  return numberCurrent + baseCurrent + baseToConvert;
};
console.log(getConvert(numberCurrent, baseCurrent, baseToConvert));

//document.getElementById("numberConverted").innerHTML = numberCurrent;

//node assets/js/main.js
