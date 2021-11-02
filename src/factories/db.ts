import mysql from 'mysql2/promise'

const connect = async ():Promise<mysql.Connection> => {
  const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: 'keeper-db' })
  return db
}

export { connect }
