import style from "./activity.module.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import CustomTooltip from "./customTooltip";

Activity.ptopTypes = {
    activity: PropTypes.shape({
        userId: PropTypes.number,
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
                calories: PropTypes.number,
                day: PropTypes.string,
                kilogram: PropTypes.number
            })
        )
    })
}

/**
 * Return the bar graph with user activity
 * @returns {JSX.Element}
 */
export default function Activity({activity}) {
    const datas = activity.sessions.map((value,index)=>({...value, "index":index + 1}));

    return (
        <div className="activity">
            <h3 className={style.title}>Activité quotidienne</h3>
            <ResponsiveContainer>
            <BarChart className={style.barchart} data={datas} width={968} height={320}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis 
                    dataKey={"index"}
                    dy={10} 
                    axisLine={{ stroke: '#DEDEDE' }} 
                    tickLine={{ stroke: 'white' }}
                    tick={{ fill: '#9B9EAC', fontFamily: 'Roboto', fontSize: "0.875rem" }}
                />
                <YAxis 
                    orientation="right" 
                    tick={{ fill: '#9B9EAC', fontFamily: 'Roboto', fontSize: "0.875rem" }} 
                    dx={10} 
                    axisLine={{ stroke: 'white' }} 
                    tickLine={{ stroke: 'white' }}
                />
                <Tooltip cursor={{fill: '#C4C4C450'}} content={<CustomTooltip />} />
                <Legend 
                    className={style.legend} 
                    layout="horizontal" 
                    verticalAlign="top" 
                    align="right" 
                    iconSize={8}
                    payload={
                        [
                            { id: 'kilogram', value: 'Poids (kg)', type: 'circle', color: '#282D30'},
                            { id: 'calories', value: 'Calories brûlées (kCal)', type: 'circle', color: '#E60000'},
                        ]
                    }
                />
                <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]}/>
                <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]}/>
            </BarChart>
            </ResponsiveContainer>
        </div>
    )
}