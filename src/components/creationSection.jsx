import './creationSection.css'
import creations from './creations.js'
import CreationsInfo from './creationsInfo.jsx'


function createSection(info){
    return(
        <CreationsInfo
            key={info.id}
            desktop_img={info.image.desktop}
            mobile_img={info.image.mobile}
            text={info.text}
        />
    )
}


function CreationSection() {
    return(
        <section className='creation-section'>
            <div className='creation-title'>
                <h2>Our Creations</h2>
                <button type='button' className='desktop-btn' hidden>SEE ALL</button>
            </div>
            <div className='creation-grid'>
                {creations.map(createSection)}
            </div>
            <div className='btn-div'>
                <button type='button' className='mobile-btn'>SEE ALL</button>
            </div>
        </section>
    )
}

export default CreationSection;