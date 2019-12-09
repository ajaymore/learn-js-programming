// Storing simple data

// Basic data types
const name = 'Ajay'; // String data type
console.log('Printing Name', name);
const age = 31; // Number data type
console.log('Printing Age', age);
const isEmployed = true; // Boolean data type
console.log('Printing whether person is employed', isEmployed);

// storing list of data
const citiesInWhichYouHaveLived = ['Pune', 'Mumbai', 'Bangalore', 'Delhi'];
console.log('Printing list of cities', citiesInWhichYouHaveLived);
const listOfYourFavoriteColors = ['Black', 'Yellow', 'Indigo'];
console.log('Printing list of favorite colors', listOfYourFavoriteColors);

// combining multiple information in one variable
const person = {
  name: 'Ajay',
  age: 31,
  isEmployed: true,
  citiesInWhichYouHaveLived: ['Pune', 'Mumbai', 'Bangalore', 'Delhi'],
  listOfYourFavoriteColors: ['Black', 'Yellow', 'Indigo']
};
console.log('Printing person info', person);

// List of people with their personal info
const listOfPeole = [
  {
    name: 'Ajay',
    age: 31,
    isEmployed: true,
    citiesInWhichYouHaveLived: ['Pune', 'Mumbai', 'Bangalore', 'Delhi'],
    listOfYourFavoriteColors: ['Black', 'Yellow', 'Indigo']
  },
  {
    name: '',
    age: 0,
    isEmployed: true,
    citiesInWhichYouHaveLived: [],
    listOfYourFavoriteColors: []
  }
];
