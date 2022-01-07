import { DtoActivity } from '../types/DtoActivity';
import { DtoUser } from '../types/DtoUser';
import { DtoAverage } from '../types/DtoAverage'
import { DtoPerformance } from '../types/DtoPerformance'
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "../assets/data"

/**
 * Mock the datas to get a user by his id
 * @param {Number} id 
 * @returns {Promise<{data: DtoUser}>}
 */
export function getOneUserById(id){
    const userDatas = USER_MAIN_DATA.find((u => u.id === id));
    return new Promise((resolve) => {
        resolve({data : userDatas})
    })
}

/**
 * Mock the datas to get the activity of a user id
 * @param {Number} id 
 * @returns {Promise<{data: DtoActivity}>}
 */
export function getUserActivity(id){
    const activityDatas = USER_ACTIVITY.find((a => a.userId === id));
    return new Promise((resolve) => {
      resolve({data: activityDatas})
    })
}

/**
 * Mock the datas to get sessions average of a user id
 * @param {Number} id 
 * @returns {Promise<{data: DtoAverage}>}
 */
export function getSessionAverage(id){
    const averageDatas = USER_AVERAGE_SESSIONS.find((u => u.userId === id));
    return new Promise((resolve) => {
      resolve({data: averageDatas})
    })
}

/**
 * Mock the datas to get a performance by user id
 * @param {Number} id 
 * @returns {Promise<{data: DtoPerformance}>}
 */
export function getPerformance(id){
    const performanceDatas = USER_PERFORMANCE.find((p => p.userId === id));
    return new Promise((resolve) => {
      resolve({data: performanceDatas})
    })
}