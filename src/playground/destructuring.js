// const person = {
//   name: 'Tbnoung',
//   age: 26,
//   location: {
//     city:'Thailand',
//     temp: 92
//   }
// }
// const {name = 'Anonymous',age} = person
// console.log(`${name} is ${age}`);
// const {city,temp:temperature} = person.location
//   if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}`);
//   }
// const book = {
//   title: 'Eco is the Enemy',
//   auther: 'Ryan Holiday',
//   publisher: {
//     name:'Tbnoung'
//   }
// }
// const {name:publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

// const address =['test','1299 S Juniper','Thailand', '4567']
// const [,street, city,zip] = address
// console.log(`You are in ${street} ${city}`);

const item = ['Coffee (hot)', '$2.00','$2.50','$3.00']
const [first, ,third] = item
console.log(`A medium ${first} costs ${third}`);