const express = require("express");
const colors = require("colors");
const morgan = require("morgan");

// Load env vars
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

// Load DB
const connectDB = require("./config/db");
connectDB();

const app = express();

// Body parser middleware
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled Promise Rejection: ${err.message}`.red);
  // Close server and exit process
  server.close(() => {
    process.exit(1);
  });
});
