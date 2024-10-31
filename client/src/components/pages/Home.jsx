import React, { useState } from 'react'
import { Card, Input, Form, Button } from 'antd'
import axios from 'axios'

export default function Home() {
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/shorten', { originalUrl: url })
            .then((res) => {
                setShortUrl(res.data.url.shortUrl)
                setUrl('')
            })
            .catch((e) => console.log(e))
    }

    return (
        <div className='w-screen flex justify-center'>
            <div className='w-[500px] mt-20'>
                <Card title="Url Shortener" extra={<a href="#">More</a>}>

                    <form onSubmit={handleSubmit} autoComplete='false'>
                        <Form.Item label="URL">
                            <Input placeholder="enter url" onChange={(e) => setUrl(e.target.value)} value={url} type='text' name='originalUrl' required/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" size="large" style={{ width: '100%' }} htmlType='submit'>Submit</Button>
                        </Form.Item>
                        <h1>ShortURl: http://localhost:3000/{shortUrl}</h1>
                    </form>

                </Card>

            </div>
        </div>
    )
}
