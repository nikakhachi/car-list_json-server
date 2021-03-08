import './car-list.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Car from './car';

function Cars(){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:3001/cars')
        .then(response => setData(response.data))
        .catch(err => console.error(err))
    }, []);

    return (
        <div>
            <header>
                <h1 id='shop-title'>Car Shopping List</h1>
            </header>
            <Link to='/cars/new'><button id='add-carlist'>Add Car</button></Link>
                {data.length === 0 ? <div className='loader'></div> : 
                <div id='list-container'>
                    {data.map(item => <Car item={item} data={data} setData={setData}/>)}
                </div>}
        </div>
    )
}

export default Cars;


