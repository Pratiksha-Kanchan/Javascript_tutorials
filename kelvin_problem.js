// The forecast today is 293 Kelvin. Hence, a variable kelvin is created.
let kelvin = 0;

// Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin. 
celsius = kelvin-273;

// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
fahrenheit = celsius*(9/5)+32;

// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

// Convert celsius to the Newton scale using the equation below
newton = celsius*(33/100)

newton = Math.floor(newton)

console.log(`The temperature is ${newton} degrees Newton`)
