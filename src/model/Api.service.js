import axios from 'axios';
import { DtoActivity } from '../types/DtoActivity';
import { DtoUser } from '../types/DtoUser';
import { DtoAverage } from '../types/DtoAverage'
import { DtoPerformance } from '../types/DtoPerformance'

/**
 * Call the API to get a user by his id
 * @param {Number} id 
 * @returns {Promise<{data: DtoUser}>}
 */
export function getOneUserById(id){
    return request(`${process.env.REACT_APP_BACKURL}/user/${id}`);
}

/**
 * Call the API to get the activity of a user id
 * @param {Number} id 
 * @returns {Promise<{data: DtoActivity}>}
 */
export function getUserActivity(id){
    return request(`${process.env.REACT_APP_BACKURL}/user/${id}/activity`);
}

/**
 * Call the API to get sessions average of a user id
 * @param {Number} id 
 * @returns {Promise<{data: DtoAverage}>}
 */
export function getSessionAverage(id){
    return request(`${process.env.REACT_APP_BACKURL}/user/${id}/average-sessions`);
}

/**
 * Call the API to get a performance by user id
 * @param {Number} id 
 * @returns {Promise<{data: DtoPerformance}>}
 */
export function getPerformance(id){
    return request(`${process.env.REACT_APP_BACKURL}/user/${id}/performance`);
}

/**
 * Execute the request to the api with the url
 * @param {String} url 
 * @returns {Promise<{data: DtoUser}> | Promise<{data: DtoActivity}> | Promise<{data: DtoAverage}> | Promise<{data: DtoPerformance}>}
 */
async function request(url){
    const {data} = await axios.get(url);
    return data
}