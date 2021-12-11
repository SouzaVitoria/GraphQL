const db = require('../config/db')

db('profiles').then(response => console.log(response)).finally(() => db.destroy())