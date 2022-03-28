import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className='contact'>
            <div className='container h-100'>
                <h1 className='text-center mt-5'>Contact me</h1>
                <div className='d-flex flex-column justify-content-center align-items-center text-center h-100 mt-5'>
                    <form className='d-flex flex-column justify-content-center align-items-center mb-5 h-100'>
                        <textarea placeholder='Send me a message'></textarea>
                        <button className='mt-5' type='submit'>Send a message</button>
                    </form>

                    <div className='socials d-flex flex-column h-100 mt-5'>
                        <a href='https://www.instagram.com/__more__light_/' target='_blank'><i><AiOutlineInstagram /> __more__light_</i></a>
                        <a href='mailto:randaboumghar@gmail.com' > <i><AiOutlineMail /> randaboumghar@gmail.com</i></a>
                        <i><FaTiktok /> __more__light_</i>
                    </div>
                </div>
            </div>

        </div>
    )
}
