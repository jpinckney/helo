require('dotenv').config()

const express = require('express')
const massive = require('massive')
const bcrypt = require('bcryptjs')
const session = require('express-session')

const { CONNECTION_STRING, SERVER_PORT, SECRET } = process.env

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => {
    console.log(`app running on ${SERVER_PORT}`)
  })
})

const app = express()

app.use(express.json())
app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: true
}))


app.post('/auth/login', async (req, res) => {
  let { username, password } = req.body
  const db = req.app.get('db')
  let user = await db.find_user([ username ])
  if (!user[ 0 ]) {
    return res.status(200).send({ Loggedin: false, message: 'username not found' })
  }
  let result = bcrypt.compareSync(password, user[ 0 ].hash_value)
  if (result) {
    req.session.user = { username: user[ 0 ].username, id: user[ 0 ].id }
    return res.status(200).send({ Loggedin: true, message: 'logged in successful' })
  } else {
    res.status(401).send({ Loggedin: false, message: 'incorrect password' })
  }
})

app.post('/auth/register', async (req, res) => {
  let { username, password } = req.body

  console.log(username, password)
  const db = req.app.get('db')
  let user = await db.find_user([ username ])
  if (user[ 0 ]) {
    return res.status(200).send({ Loggedin: false, message: 'username is already in use' })
  } else {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    let createdCustomer = await db.create_user([ username, hash ])
    req.session.user = { username: createdCustomer[ 0 ].username, id: createdCustomer[ 0 ].id }
    res.status(200).send({ Loggedin: true, message: 'Login Successful' })
  }
})
