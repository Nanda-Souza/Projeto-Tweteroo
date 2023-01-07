import express from "express";
import cors from "cors"

const server = express()


server.use(cors())
server.use(express.json());

const users = []
const tweets = []

server.get("/status", (req, res) => {
    res.send("Local Server is Running")
})

server.get("/tweets", (req, res) => {

    const recentTweets = tweets.slice(-10).reverse();
    res.send(recentTweets)
})

server.post("/tweets", (req, res) => {
    const { username, tweet } = req.body

    const user = users.find(u => u.username === username)

    if(!user){
        return res.send("UNAUTHORIZED")
    }
    
    const newTweet = {
        username,
        tweet,
        avatar: user.avatar
    }
    tweets.push(newTweet)

    res.send("OK")
})


server.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body

    const newUser = {
        username,
        avatar
    }
    users.push(newUser)
    
    //res.send(users)
    res.send("OK")
  })

server.listen(5000, () => {
  console.log('Server is up!!!')
})