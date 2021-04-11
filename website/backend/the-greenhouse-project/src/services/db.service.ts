import { Client } from 'pg';

export async function getClient() {
  const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  return client;
}

export async function retrieveImages(
  limit: number,
  offset: number,
): Promise<Images[]> {
  try {
    const client = await getClient();
    const query =
      'SELECT * from greenhouse ORDER BY id DESC LIMIT $1::int OFFSET $2::int';
    const values = [limit, offset];
    const result = await client.query(query, values);
    return result.rows;
  } catch (e) {
    console.log(e);
  }
}

export interface Images {
  image: Buffer;
  image_extension: string;
}
