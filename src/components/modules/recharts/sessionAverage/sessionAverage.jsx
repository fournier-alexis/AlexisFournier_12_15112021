import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getDayLetter } from "../../../../utils/utils";
import { CustomTooltip } from "./customTooltip";
import { CustomDot } from './customDot';
import PropTypes from 'prop-types';

SessionAverage.propTypes = {
    sessionsAverage: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.number,
            sessionLength: PropTypes.number
        })
    )
}

/**
 * Return a linechart graph for average sessions
 * @returns {JSX.Element}
 */
export default function SessionAverage(sessionsAverage) {
    const sessions = sessionsAverage.sessions.sessions;
    const datas = sessions.map((value)=>({...value, "index": getDayLetter(value.day - 1)}));

    return (
        <div className="sessionAverage" >
            <h3 className="title">Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={datas}
                    margin={{
                        left: 16,
                        right: 16
                    }}
                >
                <CartesianGrid horizontal={false} vertical={false} />
                <XAxis 
                    dataKey="index"
                    axisLine={{ stroke: 'FF0000' }} 
                    tickLine={{ stroke: 'FF0000' }}
                    dy={3}
                    tick={{ 
                        fill: '#FFFFFF75',
                        fontFamily: 'Roboto',
                        fontSize: "0.875rem",
                    }}
                />
                <YAxis type="number" domain={[0, 100]} hide={true}/>
                <Tooltip 
                    content={<CustomTooltip />}
                    wrapperStyle={{
                        height: "25px",
                        width: "39px",
                        backgroundColor: 'white',
                        font: 'normal normal 500 0.5rem "Roboto", sans-serif',
                        textAlign: 'center'
                    }}
                    cursor={false}
                    itemStyle={{
                        backgroundColor: "blue"
                    }}
                />
                <Line 
                    type="monotone" 
                    dataKey="sessionLength"
                    stroke="#FFFFFF75"
                    strokeWidth={3}
                    activeDot={<CustomDot />}
                    dot={false}
                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}