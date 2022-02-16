class Database {
    constructor(data) {
        if(Database.isExists) {
            return Database.instance
        }
        Database.instance = this
        Database.isExists = true
        this.data = data
    }

    getData() {
        return this.data
    }
}

const mongo = new Database("MongoDB")
console.log(mongo.getData())

const mongo1 = new Database("gogo")
console.log(mongo1.getData())