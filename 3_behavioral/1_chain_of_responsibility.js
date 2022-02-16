class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue
  }

  add(value) {
    this.sum += value
    return this
  }
}

const sum1 = new MySum(0)
sum1.add(8).add(67).add(5).add(7)
console.log(sum1.sum)
