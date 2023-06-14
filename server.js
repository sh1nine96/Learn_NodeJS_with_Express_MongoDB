const express = require("express");
const dotenv = require("dotenv").config();
const routes = require("./routes/contactRoutes");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/dbConnection");

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
