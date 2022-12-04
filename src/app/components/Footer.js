import React from 'react'
import "../styles.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3>Marieta's Clothes</h3>
                <p>Made by: <a href='https://www.linkedin.com/in/francobuscaglia/'>Franco Buscaglia</a> </p>
                <ul className="socials">
                    <li><a href="https://github.com/fbuscaglia"><img src="https://i.ibb.co/CsXRsLn/github.png" alt="github" className='githublogo' /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer