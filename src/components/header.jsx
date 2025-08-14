import './header.css'
import Navigation from './navigation.jsx';


function Header() {
    return(
        <header>
            <Navigation />
            <div className='hero-info'>
                <h1>Immersive experiences that deliver</h1>
            </div>
        </header>
    )
}

export default Header;