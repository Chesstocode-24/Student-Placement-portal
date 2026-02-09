const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ✅ pehle app banao
const app = express();

// ✅ middleware
app.use(cors());
app.use(express.json());

// ✅ routes import
const authRoutes = require("./routes/auth");
const jobRoutes = require("./routes/jobs");

// ✅ routes use
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

// ✅ DB connect
mongoose.connect("mongodb://127.0.0.1:27017/placement_portal")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

