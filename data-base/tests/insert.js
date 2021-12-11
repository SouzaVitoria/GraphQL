const db = require('../config/db')

const newProfile = {
  name: 'visit',
  rotule: 'Visit'
}

db('profiles').insert(newProfile).then(response => console.log(response)).catch(error => console.log(error.sqlMessage)).finally(() => db.destroy())

const profileSU = {
  name: 'root' + Math.floor(Math.random() * 10) + 1,
  rotule: 'Super Usuário'
}

db.insert(profileSU).into('profiles').then(response => console.log(response)).catch(error => console.log(error.sqlMessage)).finally(() => db.destroy())