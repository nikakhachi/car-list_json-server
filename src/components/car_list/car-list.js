import './car-list.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Car from './car';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../redux/actions';

function Cars(){

    const data = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);


    return (
        <div>
            <header>
                <h1 id='shop-title'>Car Shopping List</h1>
            </header>
                {data.length === 0 ? <div className='loader'></div> : 
                <>
                <Link to='/cars/new'><button id='add-carlist'>Add Car</button></Link>
                <div id='list-container'>
                    {data.map(item => <Car key={item.id} item={item}/>)}
                </div>
                </>}
        </div>
    )
}

export default Cars;


