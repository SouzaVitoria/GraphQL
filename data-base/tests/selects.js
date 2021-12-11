const db = require('../config/db')

db('profiles').then(response => response.map(profile => profile.name)).then(names => console.log(names)).finally(() => db.destroy())