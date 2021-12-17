import style from "./activity.module.css"

/**
 * Return tooltip for barchart
 * @returns 
 */
export default function CustomTooltip({
    active, payload 
}) {
    if (active && payload && payload.length) {
        return (
        <div className={style.customTooltip}>
            <p className={style.label}>{`${payload[0].value}kg`}</p>
            <p className={style.label}>{`${payload[1].value}Kcal`}</p>
        </div>
        );
    }
    
    return null;
}