import './GlowCard.css'

const GlowCard = ({text}) => {
    return (
        <div className="feature">
            <div className="image-con">
                <img src='./vite.svg'/>
            </div>
            <div className="feature-details">
                <h1>Free Shipping</h1>
                <span>{text}</span>
            </div>
        </div>

    )
}

export default GlowCard