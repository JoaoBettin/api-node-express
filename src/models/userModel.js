import db from '../database/db.js'

const list = async () => {
    return await db.query('SELECT * FROM users')
}

const create = async (user) => {
    const {name, email, pass} = user
    return await db.query('INSERT INTO users(name, email, pass) VALUES (?, ?, ?)', [name, email, pass])
}

const update = async (user) => {
    const {id, name, email, pass} = user
    return await db.query('UPDATE users SET name= ?, email = ?, pass = ? WHERE id = ?', [name, email, pass, id])
}

const get = async (id) => {
    return await db.query('SELECT * FROM users where id = ?', [id])
}

const remove = async (id) => {
    return await db.query('DELETE FROM users where id = ?', [id])
}

export default {list, create, get, remove, update}