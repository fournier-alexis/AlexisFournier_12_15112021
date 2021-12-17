import style from "./sessionAverage.modules.css";

/**
 * Return custom linechart tooltip
 * @returns {JSX.Element}
 */
export function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
        <div className={style.customTooltip}>
            <p className={style.label}>{`${payload[0].value} min`}</p>
        </div>
        );
    }
    
    return null;
}