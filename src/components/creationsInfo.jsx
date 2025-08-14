import './creationsInfo.css'

function CreationsInfo(props) {
    return(
        <div className='creationsInfo'>
            <picture>
                <source className='grid-img' media='(min-width: 40rem)' srcSet={props.desktop_img} alt=''/>
                <img src={props.mobile_img} alt=''/>
            </picture>
            <div className='overlay'></div>
            <h2 className='creationsInfo-text'>{props.text}</h2>
        </div>
    )
}

export default CreationsInfo;