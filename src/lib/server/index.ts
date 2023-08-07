import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import {DB_HOST,DB_USERNAME, DB_PASSWORD } from "$env/static/private";
// create the connection
const connection = connect({
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
});

const db = drizzle(connection);
