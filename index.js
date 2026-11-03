// this.name = 'Gosha'

const Ivan = { 
  name: 'Ivan',
  age: 20,
  cars: ['audi', 'geely'],
  getName() {
    console.log('Привет, мое имя', this.name)
  }
}

Ivan.getName()
//



const Vera = { 
  ...Ivan,
  name: 'Vera', 
  cars: [...Ivan.cars]
};

const Bob = JSON.parse(JSON.stringify(Ivan))
Bob.name = 'Bob'


Vera.age = 30
Ivan.cars.push('BMW') 



// console.log(JSON.stringify(Ivan)) // {"name":"Ivan","age":20,"cars":["audi","geely","BMW"]}
 



// console.log(Ivan);
// console.log(Vera);
// console.log(Bob);
console.clear()

for (let i = 0; i < 3; i++) {
  // setTimeout(() => console.log(i), 100);
}


const counter = () => {
  let a = 0;

  return () => {
    a++
    console.log(a)
  }
}

const counter1 = counter();
counter1()
counter1()


// || - если слева false -> тогда идем вправо 
// ?? - если слева null/undefined -> тогда идем вправо 


// Задача 
// показать название карты поумолчанию, если имя карты не задано 
// значение по умолчанию - "banking card"

const DEFAULT_CARD_NAME = "banking card";

const card = {
  name: ''
}


console.log('название карты "', card.name || DEFAULT_CARD_NAME, '"')


const { a = 10, b = 20 } = { a: undefined, b: null };
console.log(a, b); // 

