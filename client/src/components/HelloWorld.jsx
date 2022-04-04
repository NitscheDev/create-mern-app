import './helloworld.css'
import Logo from '../assets/images/logo.jpg'

function HelloWorld() {
    return (
        <div className='helloworld'>
            <div className="content">
                <img src={Logo} alt="create-mern-app" />
                <h1>Hello World</h1>
            </div>
        </div>
    )
}

export default HelloWorld