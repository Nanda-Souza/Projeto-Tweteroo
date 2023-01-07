import express from "express";
import cors from "cors"

const server = express()


server.use(cors())
server.use(express.json());

const users = []

server.get("/status", (req, res) => {
    res.send("Local Server is Running")
})

server.post("/sign-up", (req, res) => {
    const newUser = req.body
    users.push(newUser)
    console.log(users)
  
    res.send("OK")
  })

server.listen(5000, () => {
  console.log('Server is up!!!')
})