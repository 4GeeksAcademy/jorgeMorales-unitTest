test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dolar should be 156.5 yen", function(){

    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(5);

    const expected = (5 / 1.07) * 156.5;

    expect(yen).toBe(expected)

})

test("One yen should be 0.87/156.5 pounds", function() {
    
    const { fromYenToPound } = require('./app.js');

    
    const pounds = fromYenToPound(1000);

    
    const expected = (1000 / 156.5) * 0.87;

    
    expect(pounds).toBe(expected);
})