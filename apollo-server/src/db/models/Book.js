// Userに関連するデータベース操作箇所
const { DataSource } = require('apollo-datasource');
class Book extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }
  initialize(config) {
    this.context = config.context;
  }
  // ユーザーを全検索
  async findAll() {
    return this.store.books.findAll()
  }
  // ユーザーを検索、なければ指定されたwhere条件で作成
  async findOrCreate({ where, defaults = {} }) {
    return await this.store.books.findOrCreate({ where, defaults })
  }
  // データ全部削除
  async destroy({ where, defaults = {} }) {
    return await this.store.books.destroy({ where, defaults });
  }
}

module.exports = Book;
