const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: '10.22.4.75',
  database: 'Spetscipes',
  password: 'AlexEmma123',
  port: 5432,
})

// client.connect((error) => {
//   if (error) {
//     console.error('Error connecting to PostgreSQL database:', error)
//   } else {
//     console.log('Connected to PostgreSQL database!')
//   }
// })

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

async function isValidLogin(username, password) {

    const result = await client.query(`SELECT * FROM users WHERE username = $1 AND password = '${password}'`, [username]);


    console.log(`Executing query: SELECT * FROM users WHERE username = $1 AND password = '${password}'`);

    // Om användaren inte finns, retunera falskt
    if (result.rows.length === 0) {
        return false;
    }

  // annars true
  return true
}

async function login (username, password) {
  // kolla login
  const validLogin = await isValidLogin(username, password)

  // Om användaren finns, logga in användaren
  if (validLogin) {
    console.log('Logged in!')
    console.log('210s{Kalle Kula är den hemliga ingrediensen}')
  } else {
    console.log('Invalid username or password.')
  }
}

readline.question('Enter username: ', (username) => {
  readline.question('Enter password: ', async (password) => {
    await login(username, password)
    readline.close()
  })
})
