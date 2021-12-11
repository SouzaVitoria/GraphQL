const db = require('../config/db')

db('profiles').map(profile => profile.name).then(names => console.log(names)).finally(() => db.destroy())

db('profiles').select('name', 'id').then(response => console.log(response)).finally(() => db.destroy())

db.select('name', 'id').from('profiles').limit(3).offset(1).then(response => console.log(response)).finally(() => db.destroy())