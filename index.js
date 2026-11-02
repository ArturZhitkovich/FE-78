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



