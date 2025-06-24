import express from "express";
import cors from "cors";
import "dotenv/config";
import { serve } from "inngest/index.js";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();
const port = 3000;
await connectDB();

app.use(clerkMiddleware());

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("server is live"));
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
