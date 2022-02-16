class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class Membership {
    static dict = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = "simple") {
        const Member = Membership.dict[type] || Membership.dict.simple
        const m = new Member(name)
        m.type = type

        m.getInfo = function() {
            console.log(`name: ${this.name}, type: ${this.type}, cost: ${this.cost}`)
        }

        return m
    }
}

const factory = new Membership()
const members = [
    factory.create("Oybek", "simple"),
    factory.create("Farhod", "premium"),
    factory.create("Usmon", "standard"),
    factory.create("Shaxzod", "simple"),
    factory.create("Maxsud", "premium"),
    factory.create("Xurshid", "standard")
]

members.forEach(member => {
    member.getInfo()
})
