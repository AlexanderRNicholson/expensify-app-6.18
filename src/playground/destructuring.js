// Object destructuring

console.log('destructuring');

// const person = {
//     name: 'Alex',
//     age: 31,
//     location: {
//         city: 'Los Angeles',
//         temp: 55
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const {name, age} = person;

// console.log(`${name} is ${age}.`);

// const {city, temp} = person.location;

// if (city && temp){
//     console.log(`It's ${temp} in ${city}.`)
// };


// const book = {
//     title: 'King, Warrior, Magician, Lover',
//     author: 'Robert Moore & Douglas Gillette',
//     publisher: {
//         // name: 'HarperOne'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;


// console.log(publisherName);


//Array destructuring

const address = ['1299 S Juniper Street', 'Los Angeles', 'California', '90210'];

const [street, city, state, zip] = address;

console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (iced)', '$2.00', '$2.30', '$2.75'];

const [name, small, medium, large] = item; 

console.log(`A medium ${name} costs ${medium}.`)