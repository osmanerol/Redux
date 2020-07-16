import axios from 'axios';
export const UPDATE_USER='UPDATE_USER';
export const GET_USER_ERROR='GET_USER_ERROR';

export function updateUser(newUser){
    return {
        type:UPDATE_USER,
        payload:{
            user:newUser
        }   
    }
}

export function showError(){
    return {
        type:GET_USER_ERROR,
        payload:{
            error:'Error'
        }
    }
}

export function getUsers(){
    return async dispatch=>{
        try{
            const response=await axios.get('http://jsonplaceholder.typicode.com/users/2')
            dispatch(updateUser(response.data.name))
        } catch(error){
            dispatch(showError(error));
        }
        /*
        axios.get('http://jsonplaceholder.typicode.com/users/1')
            .then(response=>dispatch(updateUser(response.data.name)))
            .catch(error=>dispatch(showError(error)))
        */
    }
}