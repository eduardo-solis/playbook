// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
//            y obtener las primeras 3 letras
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas y obtener las primeras tres letras")
console.log(countriesFirstThreeLetters)