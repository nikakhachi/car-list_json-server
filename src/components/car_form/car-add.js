import './car-form.css';
import { useState } from 'react'
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCar } from '../../redux/actions'; 

function CarAdd(){

    const [model, setModel] = useState('Audi');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [abs, setAbs] = useState(false);
    const [elWindows, setElWindows] = useState(false);
    const [hatch, setHatch] = useState(false);
    const [bluetooth, setBluetooth] = useState(false);
    const [alarm, setAlarm] = useState(false);
    const [parkingControl, setParkingControl] = useState(false);
    const [navigation, setNavigation] = useState(false);
    const [boardComputer, setBoardComputer] = useState(false);
    const [multiWheel, setMultiWheel] = useState(false);

    const msg = useSelector(state => state.msg);
    const loading = useSelector(state => state.loading);

    const dispatch = useDispatch();

    function clickAddCar(e){
        e.preventDefault();
        const newCar = {
            id: v4(),
            model,
            description,
            imageUrl,
            features : {
                abs,
                elWindows,
                hatch,
                bluetooth,
                alarm,
                parkingControl,
                navigation,
                boardComputer,
                multiWheel
            }
        }
        dispatch(addCar(newCar));
        setModel('Audi');
        setDescription('');
        setImageUrl('');
        setAbs(false);
        setElWindows(false);
        setHatch(false);
        setBluetooth(false);
        setAlarm(false);
        setParkingControl(false);
        setNavigation(false);
        setBoardComputer(false);
        setMultiWheel(false);
    }

    return (
        <div id='form-container'>
            <h1>Add a New Car</h1>
            <form id='form' onSubmit={clickAddCar}>
                <label htmlFor='model-dropdown'>Car Model</label>
                <select value={model} onChange={(e) => setModel(e.target.value)} id="model-dropdown" required>
                    <option value="default" disabled>Choose Car Model</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                </select>
                <label htmlFor="w3review">Car Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="car-description" rows="2" placeholder='Describe the car (optional)' />
                <label htmlFor="car-image-url">Link For Car Image</label>
                <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="url" id="car-image-url" placeholder='Enter image url' required/>
                <div id='dropdown-div'>
                    <label htmlFor='abs'><input checked={abs} onChange={(e) => setAbs(e.target.checked)} type='checkbox' id='abs' />ABS</label>
                    
                    <label htmlFor='el-windows'><input checked={elWindows}  onChange={(e) => setElWindows(e.target.checked)} type='checkbox' id='el-windows' />El. Windows</label>
                    
                    <label htmlFor='hatch'><input checked={hatch} onChange={(e) => setHatch(e.target.checked)}  type='checkbox' id='hatch' />Hatch</label>
                    
                    <label htmlFor='bluetooth'><input checked={bluetooth} onChange={(e) => setBluetooth(e.target.checked)}  type='checkbox' id='bluetooth' />Bluetooth</label>
                    
                    <label htmlFor='alarm'><input checked={alarm} onChange={(e) => setAlarm(e.target.checked)}  type='checkbox' id='alarm' />Alarm</label>
                    
                    <label htmlFor='parking-control'><input checked={parkingControl} onChange={(e) => setParkingControl(e.target.checked)}  type='checkbox' id='parking-control' />Parking Control</label>
                    
                    <label htmlFor='navigation'><input checked={navigation} onChange={(e) => setNavigation(e.target.checked)}  type='checkbox' id='navigation' />Navigation</label>
                    
                    <label htmlFor='board-computer'><input checked={boardComputer} onChange={(e) => setBoardComputer(e.target.checked)}  type='checkbox' id='board-computer' />Board Computer</label>
                    
                    <label htmlFor='multi-steering-wheel'><input checked={multiWheel} onChange={(e) => setMultiWheel(e.target.checked)}  type='checkbox' id='multi-steering-wheel' />Multi Steering Wheel</label>
                </div>
                <div>
                    <button id='caraction-btn' type='submit'>Add Car</button>
                    <Link to='/cars'><button id='mainpage-btn' type='submit'>Main Page</button></Link>
                </div>
                {msg !== '' ? <p id='car-msg'><i className="fa fa-check-circle" aria-hidden="true"></i> {msg}</p> : loading ? 
                <div className='form-loader'></div> : <></>}
            </form>
        </div>
    )
}

export default CarAdd;