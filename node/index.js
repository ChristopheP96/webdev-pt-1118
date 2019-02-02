const chalk = require('chalk');
const quoteSource = require('./quotes');
const randomNumber = require('./helpers/helpers');

function selectAndPrintAQuote(listOfQuotes) {
  const number = randomNumber(0, listOfQuotes.length - 1);
  const quote = listOfQuotes[number];
  return `${quote.quote} by ${quote.name}`;
}

console.log(chalk.red(selectAndPrintAQuote(quoteSource)));
