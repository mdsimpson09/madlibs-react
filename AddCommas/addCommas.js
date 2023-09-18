// function addCommas(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   }
function addCommas(number) {
    // Separate the integer and decimal parts
    const parts = number.toString().split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] || ''; // Handle the case where there is no decimal part
  
    // Add commas to the integer part
    const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Combine the integer and decimal parts
    if (decimalPart) {
      return `${integerWithCommas}.${decimalPart}`;
    } else {
      return integerWithCommas;
    }
  }
  
//   export default addCommas;
module.exports = addCommas;