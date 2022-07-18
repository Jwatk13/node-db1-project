const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  //SELECT * FROM accounts;
  return db('accounts');
}

const getById = id => {
  // DO YOUR MAGIC
  //SELECT * FROM accounts WHERE id = ?;
  return db('accounts').where('id', id).first();
}

const create = account => {
  // DO YOUR MAGIC
  //INSERT INTO accounts (name, budget) VALUES ('name', 'num');
  return db('accounts').insert(account).then(arrayWithId => {
    return getById(arrayWithId[0]);
  });
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  //UPDATE accounts SET name/budget = ? WHERE id = ?;
  return db('accounts').where('id', id).update(account).then(numRowsAffected => {
    if (numRowsAffected === 0) {
      return null;
    }
    return getById(id);
  })
}

const deleteById = async id => {
  // DO YOUR MAGIC
  //DELETE FROM accounts WHERE id = ?;
  const result = await getById(id);
  await db('accounts').where('id', id).delete();
  return result;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
