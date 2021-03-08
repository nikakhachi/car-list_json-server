import './cars.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cars(){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:3001/cars')
        .then(response => setData(response.data))
        .catch(err => console.error(err))
    }, []);

    function deleteCar(id){
        axios
        .delete(`http://localhost:3001/cars/${id}`)
        .then(() => {
            const newArray = data.filter(item => item.id !== id);
            setData(newArray);
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            <header>
                <h1 id='shop-title'>Car Shopping List</h1>
            </header>
            <Link to='/cars/new'><button id='add-carlist'>Add Car</button></Link>
                {data.length === 0 ? <div className='loader'></div> : 
                <div id='list-container'>
                    {data.map(item => (
                    <div className='list-container-item' key={item.id}>
                        <img className='list-img' src={item.imageUrl} alt='car'/>
                        <div className='list-info'>
                            <p className='listcar-title'>{item.model}</p>
                            <p className='listcar-description'>{item.description}</p>
                        </div>
                        <div className='list-features'>
                            <ul>
                                <li>ABS - {item.features.abs ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</li>
                                <li>El. Windows - {item.features.elWindows ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</li>
                                <li>Hatch - {item.features.hatch ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</li>
                                <li>Bluetooth - {item.features.bluetooth ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</li>
                                <li>Alarm - {item.features.alarm ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</li>
                                <li>Parking Control - {item.features.parkingControl ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</li>
                                <li>Navigation - {item.features.navigation ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</li>
                                <li>Board Computer - {item.features.boardComputer ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</li>
                                <li>Multi Steering Wheel - {item.features.multiWheel ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i>}</li>
                            </ul>
                        </div>
                        <div className='list-btns'>
                            <Link to={`/cars/edit/${item.id}`}><button className='listcar-edit'>Edit</button></Link>
                            <button onClick={() => deleteCar(item.id)} className='listcar-delete'>Delete</button>
                        </div>
                    </div>
                ))}
                </div>}
        </div>
    )
}

export default Cars;


