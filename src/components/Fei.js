
@good
class Fei{
  constructor(id,name,age){
    this.id = id 
    this.name = name
    this.age = age
  }

  static staticProperties = 0

  sayHello(){
    console.log("hello")
  }
}

function good(){
  console.log("This is the decorators...")
}

console.log("This is the static properties",Fei.staticProperties)



