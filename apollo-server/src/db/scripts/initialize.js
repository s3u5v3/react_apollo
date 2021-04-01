const { getDB } = require('..');
(async () => {
  const db = await getDB();
  // const users = db.users;
  // await users.sync();
  // await users.findOrCreate({ where: { name: 'user1' } });
  // await users.findOrCreate({ where: { name: 'user2' } });
  // console.log('done!');

  const books = db.books;
  await books.sync();
  await books.findOrCreate({ where: { name: 'ur1' } });
  await books.findOrCreate({ where: { name: 'ur2' } });
  console.log('done!');
})();
