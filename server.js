const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const pageContentRoutes = require("./routes/pageContentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const reelRoutes = require("./routes/reels");

const db = require("./models");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("public/uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/page-content", pageContentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/reels", reelRoutes);
// Test route
app.get("/", (req, res) => res.send("Tattoo Studio API running"));

// Connect to DB and sync
db.sequelize.sync({ alter: false }).then(() => {
  console.log("Database connected and tables synced!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
