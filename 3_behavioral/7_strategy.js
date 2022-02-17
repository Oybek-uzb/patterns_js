class Vehicle {
  travelTime() {
    return this.timeTaken
  }
}

class Bus extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 10
  }
}

class Bike extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 15
  }
}

class Car extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 5
  }
}

class Commute {
  travel(transport) {
    return transport.travelTime()
  }
}

const commute = new Commute()
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Bike()))
console.log(commute.travel(new Car()))