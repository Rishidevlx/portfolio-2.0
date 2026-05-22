import mysql from "mysql2/promise";

const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "4000"),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "portfolio_admin_db",
  ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: false,
  },
};

let pool;

export async function getDbPool() {
  if (pool) return pool;
  pool = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0,
  });
  return pool;
}

export async function query(sql, params) {
  const activePool = await getDbPool();
  const [results] = await activePool.query(sql, params);
  return results;
}
