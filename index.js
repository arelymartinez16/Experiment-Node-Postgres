const { Client } = require('pg');
const dotenv = require('dotenv')
dotenv.config()

const connectDB = async () => {
    try {
        const client = new Client({
            user: "postgres",
            host: process.env.HOST,
            database: 'bank',
            password: process.env.PASSWORD,
            port: process.env.DBPORT
        })
        await client.connect()
        const res = await client.query('SELECT * FROM accounts')
        console.log(res.rows)
        client.end()
    }
    catch (error) {
        console.log(error)
    }
}

connectDB()