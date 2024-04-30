const { Client } = require('pg')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const client = new Client({
  user: 'postgres',
  host: '10.22.4.75',
  database: 'Spetscipes',
  password: 'AlexEmma123',
  port: 5432,
})

client.connect((error) => {
  if (error) {
    console.error('Error connecting to PostgreSQL database:', error)
  } else {
    console.log('Connected to PostgreSQL database!')
  }
})

async function isValidLogin(username, password) {
    const result = await client.query(`SELECT * FROM users WHERE username = $1 AND password = '${password}'`, [username]);
    console.log(`Executing query: SELECT * FROM users WHERE username = $1 AND password = '${password}'`);
    if (result.rows.length === 0) {
        return false;
    }
    return true
}

async function login (username, password) {
  const validLogin = await isValidLogin(username, password)
  if (validLogin) {
    console.log('Logged in!')
    if (username === 'admin') {
      console.log('210s{Kalle Kula är den hemliga ingrediensen}')
    } else {
      console.log('Hmm, i detta konto finns inget hemligt recept, kanske något administrativt konto har det?')
    }
  } else {
    console.log('Invalid username or password.')
  }
}

async function register(username, password) {
  client.query('INSERT INTO public."users" (username, password) VALUES ($1, $2)', [username, password], (error, results) => {
    if (error) {
      console.error('Error inserting data:', error)
    } else {
      console.log('Data inserted successfully:', results.rowCount)
    }
  })
}

function start() {
  setTimeout(() => {
    readline.question('Vill du registrera en användare eller logga in? (registrera/logga in): ', (choice) => {
      if (choice.toLowerCase() === 'registrera') {
        readline.question('Enter username: ', (username) => {
          readline.question('Enter password: ', async (password) => {
            await register(username, password)
            start()
          })
        })
      } else if (choice.toLowerCase() === 'logga in') {
        readline.question('Enter username: ', (username) => {
          readline.question('Enter password: ', async (password) => {
            await login(username, password)
            start()
          })
        })
      } else {
        console.log('Ogiltigt val. Försök igen.')
        start()
      }
    })
  }, 2000); // Väntar 2 sekunder innan koden inuti setTimeout körs
}

start()
