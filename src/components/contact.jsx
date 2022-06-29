import React, { Component } from 'react';
import "../components/contact.css"
import insta from "../image/greenInstagram.png"
import twit from "../image/greenTwitter.png"
import lk from "../image/greenLinkedin.png"
import git from "../image/greenGithub.png"
class Contact extends Component { 
    render() { 
        return (
            <div className='m-c-icons'>
                <div className='c-icons'>
                    <a href="https://www.instagram.com/dev_deepan/" target="_blank" rel="noopener">
                        <img src={insta} alt="" />
                    </a>
                    <a href="https://twitter.com/deepanganth" target="_blank" rel="noopener">
                        <img src={twit} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/deepan-ganth/" target="_blank" rel="noopener">
                        <img src={lk} alt="" />
                    </a>
                    <a href="https://github.com/deepanganth" target="_blank" rel="noopener">
                        <img src={git} alt="" />
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Contact;