const genreList = [
  { id: 1, name: 'Electronic' },
  { id: 2, name: 'Cosmic' },
  { id: 3, name: 'Rock' },
  { id: 4, name: 'Pop' },
  { id: 5, name: 'Jazz' },
];

exports.up = async function up(sql) {
  await sql`
	INSERT INTO genres ${sql(genreList, 'id', 'name')}
`;
};

exports.down = async function down(sql) {
  await sql`DELETE FROM genres`;
};
