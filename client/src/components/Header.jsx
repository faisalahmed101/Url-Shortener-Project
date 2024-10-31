import { Button, Menu } from 'antd'
import React from 'react'

export default function Header() {
    return (
        <div className='w-screen border h-[70px] items-center flex'>
            <div className='ml-5 mr-5 flex justify-between w-[100%]'>
                <div>
                    Logo
                </div>
                <div>
                    <Menu mode='horizontal' style={{border:'none'}}>
                        <Menu.Item>Home</Menu.Item>
                        <Menu.Item>ShortUrl</Menu.Item>
                        <Menu.Item>About</Menu.Item>
                        <Menu.Item>Contact</Menu.Item>
                    </Menu>

                </div>
                <div className='flex gap-5'>
                    <Button type="default">Login</Button>
                    <Button type="primary">Signup</Button>

                </div>
            </div>


        </div>
    )
}
