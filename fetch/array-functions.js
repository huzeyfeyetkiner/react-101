

let users = [
    {
        name: "Huzeyfe",
        age: 23
    },
    {
        name: "Furkan",
        age: 21
    },
    {
        name: "Burak",
        age: 23
    },
    {
        name: "Muhammet",
        age: 21
    }
]

// push -> diziye yeni eleman ekler
// users.push({name:"Resul", age: 20})
// console.log(users)



// map -> orjinal arrayi değiştirmeden yeni arraya elemanları atıyor
const getusers = users.map((item) => item)
console.log(getusers)

// find -> şartı sağlayan ilk elamanı döndürür
const findItem = users.find(item => item.age<23)
console.log(findItem);

// filter -> şartı sağlayan tüm elemanları döndürür
const filtered = users.filter(item => item.age>21)
console.log(filtered)
const filtered2 = users.filter(({name, age}) => age>21 && name == "Huzeyfe")
console.log("filtered,",filtered2);

// some -> şartı sağlayan herhangi bir element olması durumunda true olmaması durumunda false döndürür
const someFunc = users.some(item => item.age ===23)
console.log(someFunc)

// every -> dizideki tüm elemanlar şartı sağlıyorsa true sağlamıyorsa false döndürür
const everyFunc = users.every(item => item.name.length>1)
console.log(everyFunc)

// includes -> içerideki elemanı dizi barındırıyorsa true barındırmıyorsa false döndürür
const meyveler = ["muz","çilek","karpuz"]
const includesFunc = meyveler.includes("muz")
console.log(includesFunc)