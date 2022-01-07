import style from "./score.module.css";
import { PieChart, Pie } from 'recharts';
import PropTypes from 'prop-types';

Score.propTypes = {
    score: PropTypes.number
}

/**
 * Return a piechart with user score
 * @param {{score: Number}} score
 * @returns {JSX.Element}
 */
export default function Score(score){
    const datas = [{"name": "score", "value": score.score}];

    return (
        <div className="score">
            <h3>Score</h3>
            <div className={style.value}>
                <h4>{score.score * 100}%</h4>
                <p>de votre objectif</p>
            </div>
            <PieChart width={250} height={200}>
                <Pie
                    data={datas}
                    cx={"50%"}
                    cy={"50%"}
                    startAngle={90}
                    endAngle={90 + (360 * score.score)}
                    innerRadius={70}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                    labelLine={true}
                    fill={"#FF0000"}
                    cornerRadius={50}
                >
                </Pie>
            </PieChart>
        </div>
    )
}