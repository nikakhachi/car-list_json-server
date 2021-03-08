import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCar } from '../../redux/actions';

function Car({item}){

    const dispatch = useDispatch();

    return(
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
                            <button onClick={() => dispatch(deleteCar(item.id))} className='listcar-delete'>Delete</button>
                        </div>
        </div>
    )
}

export default Car;