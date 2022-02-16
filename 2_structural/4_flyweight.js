class Car {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class CarFactory {
  constructor() {
    this.cars = []
  }

  create(model, price) {
    const candidate = this.getCar(model)
    if (candidate) {
      return candidate
    }

    const newCar = new Car(model, price)
    this.cars.push(newCar)

    return newCar
  }

  getCar(model) {
    const car = this.cars.find(c => c.model === model)
    return car
  }
}

const factory = new CarFactory()

const bmwX6 = factory.create("bmw", 10000)
const audi = factory.create("audi", 13213)
const bmwX3 = factory.create("bmw", 123123)
console.log(bmwX6)
console.log(audi)
console.log(bmwX3)