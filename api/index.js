
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

import router from "./app/route/index.js";

app.use(router);

const PORT = process.env.PORT ?? 8000;
app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
});