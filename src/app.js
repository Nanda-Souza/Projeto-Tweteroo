import express from "express";
import cors from "cors"

const server = express()

server.use(cors())

server.get("/status", (req, res) => {
    res.send("Local Server is Running")
})

server.listen(5000, () => {
  console.log('Server is up!!!')
})