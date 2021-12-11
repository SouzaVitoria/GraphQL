const db = require('../config/db')

db('profiles').map(profile => profile.name).then(names => console.log(names)).finally(() => db.destroy())