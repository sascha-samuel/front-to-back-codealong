import camelcaseKeys from 'camelcase-keys';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();

// Read in the values from the .env file
// (which should be ignored in Git!)
require('dotenv-safe').config();

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();
export async function getAlbums() {
  const albums = await sql`
  SELECT * FROM albums
  `;
  return albums;
}
export async function getArtists() {
  const artists = await sql`
  SELECT * FROM artists
  `;
  return artists;
}
export async function getGenres() {
  const genres = await sql`
  SELECT * FROM genres
  `;
  return genres;
}
export async function getSongs() {
  const songs = await sql`
SELECT
  s.id,
  s.name,
  s.slug,
  g.name as genre,
  ar.name as artist,
  al.name as album,
  al.year as release
FROM
  songs as s,
  genres as g,
  artists as ar,
  albums as al
WHERE
  s.genre_id = g.id
AND
  s.artist_id = ar.id
AND
  s.album_id = al.id
`;
  return songs.map((song) => camelcaseKeys(song));
}
