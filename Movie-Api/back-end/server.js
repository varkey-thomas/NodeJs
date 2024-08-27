import express from "express";
import cors from "cors";
import path from "path";
import reviews from "./api/reviews.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('../front-end'));
app.get('/', (req, res) => {
  res.send("hello");
});
app.use("/api/v1/reviews", reviews);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
/*
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/reviews", reviews)
app.use("/", (req, res) => res.status(404).json({error: "not found"}))


export default app
*/
