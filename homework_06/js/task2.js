var dollar, euro;
/*for date 10.02.2018*/
let bankdollar = 27.1240;
let bankeuro = 33.2324;

euro = prompt("Please enter quantity of euro",0);
dollar = prompt("Please enter quantity of dollars",0);

let displayDollar = dollar*bankdollar;
let displayeuro = euro*bankeuro;
let relativeES = bankeuro/bankdollar;

console.log("For data", euro,",", dollar,":", euro,"euros are equal",displayeuro.toFixed(0),"UAH,", dollar,"dollars are equal",displayDollar.toFixed(0),"UAH, one euro is equal",relativeES.toFixed(3),"dollars.");