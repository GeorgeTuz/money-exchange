// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = {};
    if (currency >= 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else if (currency > 0) {
        if (currency >= 50){
            coins.H = Math.trunc(currency / 50);
            currency = currency % 50;
        }
        if (currency >= 25){
            coins.Q = Math.trunc(currency / 25);
            currency = currency % 25;
        }
        if (currency >= 10){
            coins.D = Math.trunc(currency / 10);
            currency = currency % 10;
        }
        if (currency >= 5){
            coins.N = Math.trunc(currency / 5);
            currency = currency % 5;
        }
        if (currency >= 1){
            coins.P = currency;
        }
    }
    return coins;
}
