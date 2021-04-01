// どのようにデータを取得してきて、定義したSchema (src/schema.js) の形式と型で返すかを定義
const resolvers = {
  Query: {
    // hello というQueryが来た場合には"World!"と返す。
    hello: (root, args, context) => "World!",
    // users というQueryが来た場合にはユーザーを全取得して返す。
    users: async (root, args, { dataSources }) => {
      return await dataSources.User.findAll();
    },
    books: async (root, args, { dataSources }) => {
      return await dataSources.Book.findAll();
    },
  },
  Mutation: {
    // createUser というMutationが来た場合には、ユーザーを探して返す。(なければ作成)
    createUser: async (root, { name }, { dataSources }) => {
      const user = await dataSources.User.findOrCreate({ where: { name } });
      return user[0].dataValues
    },
    createBook: async (root, { name }, { dataSources }) => {
      const book = await dataSources.Book.findOrCreate({ where: { name } });
      return book[0].dataValues
    },
    deleteBook: async (root, { name }, { dataSources }) => {
      const book = await dataSources.Book.destroy({ where: { name } });
    },
  },
};

module.exports = resolvers;
