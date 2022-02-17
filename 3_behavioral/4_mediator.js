class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this
  }

  send(message, from, to) {
    if(to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if(this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const oybek = new User("Oybek")
const xurshid = new User("Xurshid")
const farhod = new User("Farhod")
const shaxzod = new User("Shaxzod")

const room = new ChatRoom()
room.register(oybek)
room.register(xurshid)
room.register(farhod)
room.register(shaxzod)

oybek.send("Qalayshing", xurshid)
xurshid.send("Alhamdulillah", oybek )
farhod.send("O nimala bo'lopti bera")