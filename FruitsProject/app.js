const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry. No name was entered"],
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const Person = mongoose.model('Person', personSchema);

const Sage = new Person({
    name: "Sage",
    age: 20,
});


const apple = new Fruit({
    name: "Apple",
    rating: "7",
    review: "Pretty mid",
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "I loooove kiwis",
});

const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "Well rounded fruit",
});

const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "Mandarin oranges are gas",
});

const pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Tropical! Yum!",
});

const watermelon = new Fruit({
    name: "Watermelon",
    rating: "10",
    review: "So good in the summer",
});

const Gavin = new Person({
    name: "Gavin",
    age: 23,
    favouriteFruit: pineapple,
});


// Fruit.insertMany([apple, kiwi, banana, orange]).then(() => console.log('Fruits added!'));
// Person.insertMany([Sage]).then(() => console.log('People added!'));

// Fruit.deleteMany({}).then(function () {
//     mongoose.connection.close();
// });

Fruit.find().then(function (fruits) {
    mongoose.connection.close();
    fruits.forEach(function (fruit) {
        console.log(fruit);
    });
});

