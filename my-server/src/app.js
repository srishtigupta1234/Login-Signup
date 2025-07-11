const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("../config/db");
const authRoute = require("../routes/user");

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("🚀 API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, async() => {
  console.log(`🌐 Server running at http://localhost:${PORT}`);
  await connectDB();
});
