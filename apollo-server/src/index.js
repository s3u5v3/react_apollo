// Apollo Serverの初期化処理 (クロスオリジン対応や Schema , Resolver の定義 ) やデータベースへの接続処理を記述した上で、Node.jsサーバーを起動する
const { ApolloServer } = require("apollo-server");

const typeDefs = require('./schema');

const resolvers = require('./resolver');

const User = require('./db/models/User');
const Book = require('./db/models/Book');

const { getDB } = require('./db');

const boot = async () => {
  // データベースのインスタンスを取得
  const store = await getDB();
  //ApolloServerを初期化
  const server = new ApolloServer({
    cors: {
      origin: '*',
      credentials: true,
    },
    typeDefs,
    resolvers,
    dataSources: () => ({
      // User: new User({ store }),
      Book: new Book({ store })
    }),
  });
  // 指定ポートでの待ち受け開始
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
}

boot();
