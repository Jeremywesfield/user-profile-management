import calmGraphic from '../../../images/calmGraphic.png';

export function Graphic() {
    return (
        <div className='graphic-container'>
            <img className='calm-graphic' src={calmGraphic} alt="calm-graphic" />
        </div>
    )
}