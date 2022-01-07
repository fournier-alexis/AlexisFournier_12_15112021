import style from "./card.module.css"
import PropTypes from 'prop-types';

Card.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    unit: PropTypes.string,
    icon: PropTypes.string
}

/**
 * Return a card fot a keydata
 * @param {String} label
 * @param {Number} value
 * @param {String} unit 
 * @param {any} icon
 * @returns {JSX.Element}
 */
export default function Card ({
    label,
    value,
    unit,
    icon
}) {
    return (
        <div className={style.card}>
            <img className={style.icon} src={icon} alt={`icon ${label}`} />
            <div className={style.values}>
                <h1>{`${value}${unit}`}</h1>
                <h2>{label}</h2>
            </div>
        </div>
    )
}