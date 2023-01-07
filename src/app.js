import express from "express";
import cors from "cors"

const server = express()


server.use(cors())
server.use(express.json());

const users = [
    {
        username: "lavitz",
        avatar: "https://static.wikia.nocookie.net/legendofdragoon/images/2/25/Lavits.jpg"   
    }]
const tweets = [
    {
        username: "lavitz",
        avatar: "https://static.wikia.nocookie.net/legendofdragoon/images/2/25/Lavits.jpg",
        tweet: "eitaa"   
    }]

server.get("/status", (req, res) => {
    res.send("Local Server is Running")
})

server.get("/tweets", (req, res) => {
    res.send(tweets)
})

server.post("/tweets", (req, res) => {
    const { username, tweet } = req.body

    const newTweet = users.find(u => u.username === username)

    if(!newTweet){
        return res.send("UNAUTHORIZED")
    }
    
    res.send("OK")
})


server.post("/sign-up", (req, res) => {
    const newUser = req.body
    users.push(newUser)
      
    res.send("OK")
  })

server.listen(5000, () => {
  console.log('Server is up!!!')
})