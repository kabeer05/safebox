import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import getPGClient from "./db/pgClient.js";

dotenv.config();

/* Constants */
const PORT = process.env.PORT || 8080;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 5432;
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD;

const app = express();

// Middlewares
app.use(
  cors({
    origin: [process.env.BASE_URL, "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

/* Routings */
import apiV1Routes from "./routes/api/v1/index.js";

app.use("/api/v1", apiV1Routes);

app.get("/*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "The requested resource or url was not found on this server",
    error: true,
  });
});

global.client = null;
(async () => {
  try {
    global.client = getPGClient(DB_USER, DB_HOST, DB_PASSWORD, DB_PORT);
    await client.connect();
    console.log("Connected to the database successfully!!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to the database: ", err);
  }
})();
