// Sequelizeのインスタンスの定義とusersテーブルの定義
const SQL = require('sequelize');
const getDB = async () => {
  const Op = SQL.Op;
  const operatorsAliases = {
    $in: Op.in,
  };
  const db = new SQL('', '', '', {
    dialect: 'sqlite',
    storage: './db/sqlite',
    operatorsAliases,
    logging: false,
  });
  const books = db.define('book', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: SQL.STRING,
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
  });
  return { books };
}

module.exports = {
  getDB,
}
