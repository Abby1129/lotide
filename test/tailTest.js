const tail = require("../tail")
const assertEqual = require("../assertEqual")

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); 

const words1 = []
tail(words1)
assertEqual(words1.length, undefined)

const words2 = ["one thing"]
tail(words2)
assertEqual(words2.length, undefined)