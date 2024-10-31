import express from 'express'
import cors from 'cors'
import db from '../server/models/db.js'
import dotenv from 'dotenv'
import urlRoute from './routes/urlRoutes.js'
import { getShortid } from './controllers/urlController.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', urlRoute)


// app.get('/', (req, res)=>{
//     res.send('api working')
// })

app.get('/:shortId', getShortid)

const port = process.env.PORT || 400




app.listen(port, ()=>console.log(`listening on ${port}`))