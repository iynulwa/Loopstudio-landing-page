import './headSection.css'

function HeadSection() {
    return(
        <section className='head-section'>
            <picture className='head-img'>
                <source srcSet='/images/desktop/image-interactive.jpg' alt='man with VR headset on' />
                <img src='/images/mobile/image-interactive.jpg' alt='man with VR headset on' />
            </picture>
            <div className='head-section-text'>
                <h2>The leader in interactive VR</h2>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                </p>
            </div>
        </section>
    )
}

export default HeadSection;