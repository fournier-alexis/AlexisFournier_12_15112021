import axios from 'axios';

/**
 * Call the API to get a user by his id
 */
export function getOneUserById(id){
    return request(`${process.env.REACT_APP_BACKURL}/user/${id}`);
}

/**
 * Call the API to get the activity of a user id
 */
export function getUserActivity(id){
    return request(`${process.env.REACT_APP_BACKURL}/user/${id}/activity`);
}

/**
 * Call the API to get sessions average of a user id
 */
export function getSessionAverage(id){
    return request(`${process.env.REACT_APP_BACKURL}/user/${id}/average-sessions`);
}

/**
 * Call the API to get a performance by user id
 */
export function getPerformance(id){
    return request(`${process.env.REACT_APP_BACKURL}/user/${id}/performance`);
}

async function request(url){
    const {data} = await axios.get(url);
    return data
}