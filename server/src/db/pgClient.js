import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Client: PGClient } = pg;

function getPGClient(user, host, password, port) {
  return new PGClient({
    user: user,
    host: host,
    database: "safebox",
    password: password,
    port: port,
  });
}

export default getPGClient;
