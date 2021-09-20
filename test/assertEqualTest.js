const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail')

//HEAD TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");

//ASSERT EQUAL TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Alex", "Alex");
assertEqual(1, 1);
assertEqual(1, 2);

const example = ['hello', 'Alex']
assertEqual(tail(example).length, 1);