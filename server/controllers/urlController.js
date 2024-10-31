import shortid from "shortid";
import { Url } from "../models/Url.js";


export const shorten = async (req, res) => {
    const { originalUrl } = req.body
    if (!originalUrl) {
        return res.status(401).json({ success: false, msg: "please provide valid url" })
    }

    try {

        const shortUrl = shortid.generate()

        const url = new Url({ originalUrl, shortUrl })
        await url.save()

        res.status(200).json({ success: true, url })

    } catch (error) {
        res.status(401).json({ success: false, msg: "somthing went wrong" })
    }
}


export const getShortid = async (req, res) => {
    const { shortId } = req.params

    if(!shortId){
        return res.status(404).json('URL not found');
    }
    

    try {
        const url = await Url.findOne({ shortUrl: shortId })

        if (url) {
            url.clicks++
            await url.save()

            return res.redirect(url.originalUrl)
        }

        else {
            return res.status(404).json('URL not found');
        }

    } catch (error) {
        res.status(401).json({ success: false, msg: "somthing went wrong" })
    }

}



