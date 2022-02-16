class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAWS = true
    server.awsInfo = function() {
        return server.url
    }

    return server
}

function azure(server) {
    server.isAzure = true
    server.azureInfo = function() {
        return server.url
    }

    return server
}

const s1 = aws(new Server("12.34.56.78", 8000))
console.log(s1.isAWS)
console.log(s1.awsInfo())

const s2 = azure(new Server("12.34.56.78", 8000))
console.log(s2.isAzure)
console.log(s2.azureInfo())