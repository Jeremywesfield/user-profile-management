import calmGraphic from '../../../images/calmGraphic.png';

export function Graphic() {
    return (
        <div className='graphic-container'>
            <img src={calmGraphic} alt="calm-graphic" width="430" height="430" />
        </div>
    )
}