import { GET_CARS, UPDATE_CAR, IS_LOADING, ADD_CAR, DELETE_CAR, SET_MSG } from './types';

const initialState = {
    cars: [],
    loading: false,
    msg: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case IS_LOADING:
            return {...state, loading: true};
        case GET_CARS:
            return {...state, loading: false, cars: action.payload};
        case ADD_CAR:
            return {...state, cars: state.cars.concat(action.payload)}
        case DELETE_CAR:
            return {...state, loading: false, cars: state.cars.filter(item => item.id !== action.payload)};
        case UPDATE_CAR:
            return {...state, loading: false};
        case SET_MSG:
            return {...state, loading: false, msg: action.payload};
        default:
            return state
    }
}

export default reducer;