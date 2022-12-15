const topla = (a,b) => a+b;

const cikar = (a,b) => a-b;

const hello = (name) => {
    console.log(`hello ${name}`);
    // console.log("hello "+name);
} 
// başına export yazarak da yapılabiliyor ( ör -> export hello = ()... )

const text = "Text";

const user = {
    name : "Huzeyfe",
    surname : "Yetkiner"
}

const users = [{name:"Huzeyfe",surname:"Yetkiner"},{name:"Büşra",surname:"Yılmaz"}]

export { topla, cikar, hello, text, user, users}

export default hello;

