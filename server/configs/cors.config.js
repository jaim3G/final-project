const cors = require('cors')

const whitelist = [process.env.DOMAIN_LOCAL]
const corsOptions = {
    origin: (origin, cb) => {
        const originIsWhitelisted = true //whitelist.includes(origin)
        cb(null, originIsWhitelisted)
    }, 
    credentials: true
}

module.exports = app => app.use(cors(corsOptions))