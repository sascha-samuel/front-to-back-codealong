const albumList = [
  { id: 1, name: 'Xmas In Space', year: 2020 },
  { id: 2, name: 'Xmas In Space II', year: 2021 },
  { id: 3, name: 'Pigeons Are The Best', year: 2020 },
  { id: 4, name: 'Contenido', year: 2020 },
];

exports.up = async function up(sql) {
  await sql`
	INSERT INTO albums ${sql(albumList, 'id', 'name', 'year')}
`;
};

exports.down = async function down(sql) {
  await sql`DELETE FROM albums`;
};
