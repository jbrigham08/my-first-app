import profilePicture from './assets/Jeff2.JPG'
import './App.css'

function App() {

    return <>
        <div class='App'>
            <img src={profilePicture} alt="" />

            <h1 id='main'>Jeff Brigham</h1>

            <h2 id='sub'>Software Engineer</h2>

            <div className='sections'>
                <h3 className='h3'>About Me</h3>
                <hr />
                <p>I'm a future software engineer and I'm here to solve problems.</p>
            </div>
            
            <div className='sections'>
                <h3 className='h3'>Contact Me</h3>
                <hr />
                <p>Email: jbrigham08@gmail.com | LinkedIn: https://www.linkedin.com/</p>
            </div>
            </div>
    </>
        
}

export default App;
