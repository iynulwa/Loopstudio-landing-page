import './footer.css'
import AboutInfo from './aboutInfo';

function Footer() {
    return(
        <footer>
            <div className='footer-about-child'>
                <img src='/images/logo.svg' alt='company logo'/>
                <AboutInfo />
            </div>
            <div className='footer-logo-child'>
                <div className='socials-logos'>
                    <a href='#' className='foot-logo'><img src='/images/icon-facebook.svg' alt='Go to facebook profile'/></a>
                    <a href='#' className='foot-logo'><img src='/images/icon-twitter.svg' alt='Go to twitter profile'/></a>
                    <a href='#' className='foot-logo'><img src='/images/icon-pinterest.svg' alt='Go to pinterest profile' /></a>
                    <a href='#' className='foot-logo'><img src='images/icon-instagram.svg' alt='Go to instagram profile' /></a>
                </div>
                <p>© 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;