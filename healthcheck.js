const http = require('http')

http.get('http://localhost:3000', (res)=> {
    if (res.statusCode !== 200) {
        process.exit(1)
    } else {
        process.exit(0)
    }
})