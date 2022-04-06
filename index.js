function convertToMonetaryValue(number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(number / 100);
}

function hundredNumberToBrl(number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(number);
}


module.exports = {
    convertToMonetaryValue,
    hundredNumberToBrl
}