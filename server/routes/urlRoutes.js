import express from 'express'
import { shorten } from '../controllers/urlController.js'



const urlRoute = express.Router()

urlRoute.post('/shorten', shorten)


export default urlRoute