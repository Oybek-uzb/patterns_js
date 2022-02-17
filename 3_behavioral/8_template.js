class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibility() {}

  work() {
    return `${this.name} ${this.responsibility()}`
  }

  getPaid() {
    return `${this.name}'s salary is ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibility() {
    return "develops applications"
  }
}

class QA extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibility() {
    return "tests applications"
  }
}

const dev = new Developer("Farhod", 2000)
const qa = new QA("Liboy", 500)

console.log(dev.responsibility())
console.log(dev.work())
console.log(dev.getPaid())

console.log(qa.responsibility())
console.log(qa.work())
console.log(qa.getPaid())
