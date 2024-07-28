
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import postRoute from './routes/post.route.js'
import chatRoute from './routes/chat.route.js'
import messageRoute from './routes/message.route.js'

const psserver=express()
psserver.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
psserver.use(express.json())
psserver.use(cookieParser())
psserver.use("/api/auth",authRoute)
psserver.use("/api/users",userRoute)
psserver.use("/api/posts",postRoute)
psserver.use("/api/chats",chatRoute)
psserver.use("/api/messages",messageRoute)


psserver.listen(3000,()=>{
    console.log("server is running")
})