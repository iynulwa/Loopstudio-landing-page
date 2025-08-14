import './header.css'
import { useState } from 'react';

function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <nav>
                <img className='logo' src='/images/logo.svg' alt='company logo' loading='lazy'/>
                <img onClick={handleClick} className='menu-icon open' src='/images/icon-hamburger.svg' alt='open menu' loading='lazy'/>
                <div className='desktop-items' hidden>
                    <p className='desktop-menu'>About</p>
                    <p className='desktop-menu'>Careers</p>
                    <p className='desktop-menu'>Events</p>
                    <p className='desktop-menu'>Products</p>
                    <p className='desktop-menu'>Support</p>
                </div>
            </nav>

            {isOpen && <div className='pop-up-menu'>
                <div className='logo-close-div'>
                    <img className='logo' src='/images/logo.svg' alt='company logo' loading='lazy'/>
                    <img onClick={handleClick} className='menu-icon close' src='/images/icon-close.svg' alt='close menu' loading='lazy'/>
                </div>
                <div>
                    <p className='menu-items'>About</p>
                    <p className='menu-items'>Careers</p>
                    <p className='menu-items'>Events</p>
                    <p className='menu-items'>Products</p>
                    <p className='menu-items'>Support</p>
                </div>
            </div> }
        </>
    )
}

export default Navigation;