const db = require('../config/db')

const newProfile = {
  name: 'visit',
  rotule: 'Visit'
}

db('profiles').insert(newProfile).then(response => console.log(response)).catch(error => console.log(error.sqlMessage)).finally(() => db.destroy())