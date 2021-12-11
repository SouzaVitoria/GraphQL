const db = require('../config/db')

db('profiles').map(profile => profile.name).then(names => console.log(names)).finally(() => db.destroy())

db('profiles').select('name', 'id').then(response => console.log(response)).finally(() => db.destroy())