import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

// Route
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to HNGi13 Stage Zero",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running successfully running on port ${PORT}`);
});
