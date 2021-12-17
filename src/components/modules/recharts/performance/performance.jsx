import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import {traduct} from "./../../../../utils/utils";
import PropTypes from 'prop-types';

Performance.propTypes = {
    userId: PropTypes.number,
    kind: PropTypes.shape({
        [PropTypes.number]: PropTypes.string
    }),
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            kind: PropTypes.number
        })
    )
}

/**
 * Return a radarchart with user stats 
 * @returns {JSX.Element}
 */
export default function Performance({performance}){
    const datas = performance.data.map((value)=>({...value, kind: traduct(performance.kind[value.kind])})).reverse();

    return (
        <div className="performance">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datas}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis 
                        dataKey="kind"
                        tick={{ 
                            fill: 'white',
                            fontFamily: 'Roboto',
                            fontSize: "0.75rem",
                        }}
                    />
                    <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.78} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}