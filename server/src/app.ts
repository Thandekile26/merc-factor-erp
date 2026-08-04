import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    application: "Merc Factor ERP API",
    version: "1.0.0",
    status: "Running",
  });
});

app.use("/auth", authRoutes);

export default app;