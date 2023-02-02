// var slugify = require('slugify') ES6 öncesi import yöntemi

import slugify from "slugify" // ES6 sonrası güncel import yöntemi

let title = "i am learning basic node"

console.log(slugify(title,"*"))

// default olarak dışa aktarılan hello fonksiyonunu süslü parantezler içerisinde çağıramıyoruz.
import hello, {topla, cikar, text, user, users} from "./my-module.js"

console.log(cikar(4,2));
console.log(topla(4,2));
hello("Huzeyfe")
console.log(text);
console.log(user);
console.log(users);