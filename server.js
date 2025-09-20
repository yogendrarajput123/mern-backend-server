const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const userRoute = require("./routes/userRoute");

app.use(express.json()); // all data coming are convert to json on backend

const PORT = process.env.PORT || 8000;

// Connect database with nodeJs  🚀🚀
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Database Connected Successfully : ");
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log("error", error);
  });

app.use(userRoute);
