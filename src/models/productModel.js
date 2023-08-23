import db from '../database/db.js'

const list = async () => {
    return await db.query('SELECT * FROM products')
}

const create = async (product) => {
    const {name, price, code} = product
    return await db.query('INSERT INTO products(name, price, code) VALUES (?, ?, ?)', [name, price, code])
}

const update = async (product) => {
    const {id, name, price, code} = product
    return await db.query('UPDATE products SET name= ?, price = ?, code = ? WHERE id = ?', [name, price, code, id])
}

const get = async (id) => {
    return await db.query('SELECT * FROM products where id = ?', [id])
}

const remove = async (id) => {
    return await db.query('DELETE FROM products where id = ?', [id])
}

export default {list, create, get, remove, update}