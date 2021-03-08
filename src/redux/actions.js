import { GET_CARS, UPDATE_CAR, IS_LOADING, ADD_CAR, DELETE_CAR, SET_MSG } from './types';
import axios from 'axios';
import store from './store';

function getData(){
    store.dispatch({type: IS_LOADING})
    return dispatch => {
        axios
        .get('http://localhost:3001/cars')
        .then(response => dispatch({
            type: GET_CARS,
            payload: response.data
        }))
        .catch(err => console.error(err))
    }
}

function deleteCar(id){
    store.dispatch({type: IS_LOADING})
    return dispatch => {
        axios
        .delete(`http://localhost:3001/cars/${id}`)
        .then(() => dispatch({
            type: DELETE_CAR,
            payload: id
        }))
        .catch(err => console.error(err))
    }
}

function updateCar(id, object){
    store.dispatch({type: IS_LOADING})
    return dispatch => {
        axios
        .put(`http://localhost:3001/cars/${id}`, object)
        .then(() => {
            dispatch({ type: UPDATE_CAR })
            dispatch({ type: SET_MSG, payload: 'Car was edited Successfuly'})
            setTimeout(() => dispatch({ type: SET_MSG, payload: ''}), 3000);
        })
        .catch(err => console.log(err))
    }
}

function addCar(object){
    store.dispatch({type: IS_LOADING})
    return dispatch => {
        axios
        .post('http://localhost:3001/cars', object)
        .then(() => {
            dispatch({ type: ADD_CAR, payload: object })
            dispatch({ type: SET_MSG, payload: 'Car added Successfuly'})
            setTimeout(() => dispatch({ type: SET_MSG, payload: ''}), 3000);
        })
    }
}

export { getData, deleteCar, updateCar, addCar };