import express, { Request, Response } from "express";
import cors from "cors";

import { fetchCatFact } from "./cat_service";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

// Route
app.get("/me", async (_req: Request, res: Response) => {
  try {
    const catFact = await fetchCatFact();

    res.status(200).json({
      status: "success",
      user: {
        email: "peepeeajii@gmail.com",
        name: "Paul Ajijola",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    });
  } catch (error: any) {
    const statusCode = error.message.includes("timeout") ? 504 : 500;
    const errorResponse = {
      status: "error",
      message: error.message || "Internal Server Error",
      timestamp: new Date().toISOString(),
    };
    res.status(statusCode).json(errorResponse);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running successfully running on port ${PORT}`);
});
