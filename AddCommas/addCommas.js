
function addCommas(number) {

    const parts = number.toString().split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] || '';
    const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
 
    if (decimalPart) {
      return `${integerWithCommas}.${decimalPart}`;
    } else {
      return integerWithCommas;
    }
  }
  

module.exports = addCommas;