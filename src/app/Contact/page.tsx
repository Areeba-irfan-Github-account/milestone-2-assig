import React from 'react'
import Navbar from '../components/Navbar'

function page() {
    return (
        <div>
            <Navbar />
            <div className='contact-container'>

                <h1 className='contact-title'>Contact</h1>
                <input className="input-box" type="text"
                    placeholder='Write here your name' />
                <br />
                <input className="message-box" type="text" name="Message" placeholder='Write here you message' />
                <button className='submit-btn'>
                    Send Message
                </button>
            </div>

        </div>
    )
}

export default page