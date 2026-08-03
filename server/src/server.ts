import dotenv from "dotenv";

dotenv.config();

import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("");
  console.log("==================================");
  console.log(" MERC FACTOR ERP API");
  console.log("==================================");
  console.log(` Server running on port ${PORT}`);
  console.log("");
});