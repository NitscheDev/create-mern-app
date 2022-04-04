import './helloworld.css'
import Logo from '../assets/images/logo.jpg'
import { useEffect, useState } from 'react'

function HelloWorld() {
    const [text,setText] = useState('')
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await fetch('/api')
                const json = await data.json()
                setText(json.message)
            } catch (error) {
                console.log(error)
            }
        }
        fetchApi()
    },[])

    return (
        <div className='helloworld'>
            <div className="content">
                <img src={Logo} alt="create-mern-app" />
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default HelloWorld