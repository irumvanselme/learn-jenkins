import express from "express"

const app = express();

app.get("/", (req, res) => {
  res.send({status: "RUNNING"})
})

app.listen(4001, () => {
  console.log("Server running on 4001")
})