const songList = [
  {
    name: 'The First Noel',
    slug: 'xmas-in-space/the-first-noel',
    artist_id: 1,
    genre_id: 2,
    album_id: 1,
  },
  {
    name: 'Silent Night',
    slug: 'xmas-in-space/silent-night',
    artist_id: 1,
    genre_id: 1,
    album_id: 1,
  },
  {
    name: 'O Come O Come Emmanuel',
    slug: 'xmas-in-space/o-come-o-come-emmanuel',
    artist_id: 1,
    genre_id: 1,
    album_id: 1,
  },
  {
    name: 'Shchedryk',
    slug: 'xmas-in-space/shchedryk',
    artist_id: 1,
    genre_id: 1,
    album_id: 1,
  },
  {
    name: 'We Three Kings',
    slug: 'xmas-in-space-ii/we-three-kings',
    artist_id: 1,
    genre_id: 2,
    album_id: 2,
  },
  {
    name: 'Deck The Halls',
    slug: 'xmas-in-space-ii/deck-the-halls',
    artist_id: 1,
    genre_id: 1,
    album_id: 2,
  },
  {
    name: 'Jingle Bells',
    slug: 'xmas-in-space-ii/jingle-bells',
    artist_id: 1,
    genre_id: 1,
    album_id: 2,
  },
  {
    name: 'Toyland',
    slug: 'xmas-in-space-ii/toyland',
    artist_id: 1,
    genre_id: 1,
    album_id: 2,
  },
  {
    name: 'Angels We Have Heard on High',
    slug: 'xmas-in-space-ii/angels-we-have-heard-on-high',
    artist_id: 1,
    genre_id: 1,
    album_id: 2,
  },
  {
    name: 'Jump ! Oh Hi Mark',
    slug: 'pigeons-are-the-best/jump-!-oh-hi-mark',
    artist_id: 2,
    genre_id: 3,
    album_id: 3,
  },
  {
    name: 'Des millions de petites larmes de chat',
    slug: 'pigeons-are-the-best/des-millions-de-petites-larmes-de-chat',
    artist_id: 2,
    genre_id: 4,
    album_id: 3,
  },
  {
    name: 'La danse des petits animaux mignons',
    slug: 'pigeons-are-the-best/la-danse-des-petits-animaux-mignons',
    artist_id: 2,
    genre_id: 2,
    album_id: 3,
  },
  {
    name: 'Hard XxX Ultra Yaoi Psychedelic Death Of Vintage Cluster Bomb Of Glitter',
    slug: 'pigeons-are-the-best/hard-xxx-ultra-yaoi-psychedelic-death-of-vintage-cluster-bomb-of-glitter',
    artist_id: 2,
    genre_id: 3,
    album_id: 3,
  },
  {
    name: 'Lightbull',
    slug: 'pigeons-are-the-best/lightbull',
    artist_id: 2,
    genre_id: 3,
    album_id: 3,
  },
  {
    name: 'RD2DOOM',
    slug: 'pigeons-are-the-best/rd2doom',
    artist_id: 2,
    genre_id: 3,
    album_id: 3,
  },
  {
    name: "I'M A Watermelon",
    slug: "pigeons-are-the-best/i'm-a-watermelon",
    artist_id: 2,
    genre_id: 3,
    album_id: 3,
  },
  {
    name: 'Contenido',
    slug: 'contenido/contenido',
    artist_id: 3,
    genre_id: 5,
    album_id: 4,
  },
  {
    name: 'Petrushka Revisited',
    slug: 'contenido/petrushka-revisited',
    artist_id: 3,
    genre_id: 5,
    album_id: 4,
  },
  {
    name: '3LW',
    slug: 'contenido/3lw',
    artist_id: 3,
    genre_id: 5,
    album_id: 4,
  },
  {
    name: 'Lamento acústico',
    slug: 'contenido/lamento-acústico',
    artist_id: 3,
    genre_id: 5,
    album_id: 4,
  },
  {
    name: 'Persecución en el interior de La Casa Encendida',
    slug: 'contenido/persecución-en-el-interior-de-la-casa-encendida',
    artist_id: 3,
    genre_id: 5,
    album_id: 4,
  },
];

exports.up = async function up(sql) {
  await sql`
	INSERT INTO songs ${sql(
    songList,
    'name',
    'slug',
    'artist_id',
    'genre_id',
    'album_id',
  )}
`;
};

exports.down = async function down(sql) {
  await sql`DELETE FROM songs`;
};
