import style from "./dashboard.module.css"
import PropTypes from 'prop-types';
import Activity from "./../../modules/recharts/activity/activity";
import SessionAverage from "./../../modules/recharts/sessionAverage/sessionAverage";
import Performance from "./../../modules/recharts/performance/performance";
import Score from "./../../modules/recharts/score/score";
import Card from "./../../modules/card/card";
import {getIcon, getUnit, getLabel} from "./../../../utils/utils";
import { DtoUser } from "../../../types/DtoUser";
import { DtoActivity } from "../../../types/DtoActivity";
import { DtoAverage } from "../../../types/DtoAverage";
import { DtoPerformance } from "../../../types/DtoPerformance";

Dashboard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        keyData: PropTypes.shape({
            calorieCount: PropTypes.number,
            carbohydrateCount: PropTypes.number,
            lipidCount: PropTypes.number,
            proteinCount: PropTypes.number
        }),
        todayScore: PropTypes.number,
        userInfos: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            age: PropTypes.number
        })
    }),

    activity: PropTypes.shape({
        userId: PropTypes.number,
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
                calories: PropTypes.number,
                day: PropTypes.string,
                kilogram: PropTypes.number
            })
        )
    }),

    sessionAverage: PropTypes.shape({
        userId: PropTypes.number,
        sessions: PropTypes.arrayOf(
            PropTypes.shape({
                day: PropTypes.number,
                sessionLength: PropTypes.number
            })
        )
    }),

    performance: PropTypes.shape({
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
    })
}

/**
 * Return a page that group all graphs and datas for an user
 * @param {DtoUser} user
 * @param {DtoActivity} activity
 * @param {DtoAverage} sessionAverage
 * @param {DtoPerformance} performance
 * @returns {JSX.Element}
 */
export default function Dashboard({
    user,
    activity,
    sessionAverage,
    performance
}) {
    return (
        <div className={style.dashboard}>
            <div>
                <h1>Bonjour <span className={style.colorRed}>{user.userInfos.firstName}</span></h1>
                <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            </div>
            <div className={style.datas}>
                <section className={style.graphs}>
                    <Activity activity={activity}></Activity>
                    <div className={style.resume}>
                        <SessionAverage sessions={sessionAverage}></SessionAverage>
                        <Performance performance={performance}></Performance>
                        <Score score={user.todayScore || user.score}></Score>
                    </div>
                </section>
                <section className={style.keydata}>
                    {Object.values(user.keyData).map((v, i) => {
                        const index = Object.keys(user.keyData)[i];
                        return <Card key={i} label={getLabel(index)} value={v} unit={getUnit(index)} icon={getIcon(index)}></Card>
                    })}
                </section>
            </div>
        </div>
    )
}