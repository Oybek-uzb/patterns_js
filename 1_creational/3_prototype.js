const car = {
    wheels: 4,
    init() {
        console.log(`I am a four-wheel car. My owner is ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: "Farhod"
    }
})

console.log(carWithOwner.__proto__)

carWithOwner.init()
