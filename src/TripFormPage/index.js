import {useEffect, useState} from 'react'
import './index.css'

const TripFormPage =({addTrip, editTrip, currentTrip, setCurrentTrip}) =>{
    const initialTripState = {
        id:null,
        start :"", 
        destination:"", 
        avaibleStartDate :'', 
        availableEndDate:'', 
        travelType:'plane' , 
        notes:''
    }

const [tripData, setTripData] = useState(initialTripState)

useEffect(()=>{
    if(currentTrip){
        setTripData(currentTrip)
    }
}, [currentTrip])

  const handleOnChange =(e)=>{
    const {name, value}= e.target
    setTripData((prevState) => ({...prevState, [name]: value}))
  }

   const onSubmitaddTrip =(e)=>{
        e.preventDefault()
        if(tripData.id){
            editTrip(tripData)
        }else{
            addTrip(tripData)
        }
        setTripData(initialTripState)
        setCurrentTrip(null) 
    }



    const handleCancel =()=>{
        setTripData(initialTripState)
        setCurrentTrip(null)
    }
    
        return(
            <div className='trip-form-container'>
                <form className='trip-planner-form' onSubmit={onSubmitaddTrip}>
                <h4>Enter Your Trip Details Here</h4>
                   <div><input type='text' name="start" onChange={handleOnChange} value={tripData.start} placeholder='enter your start place'/></div>
                   <div><input  type='text'  name="destination" onChange={handleOnChange} value={tripData.destination} placeholder='enter your destination'/></div>
                   <div><input type='date'  name="avaibleStartDate"onChange={handleOnChange} value={tripData.avaibleStartDate} placeholder='start date'/></div>
                   <div><input type='date' name="availableEndDate" onChange={handleOnChange} value={tripData.availableEndDate}/></div>
                   <div className='travel-type-container'>
                        <select onChange={handleOnChange} value={tripData.travelType} name='travelType'>
                            <option value='plane'>plane</option>
                            <option value='road'>Road</option>
                            <option value='cruship'>cruship</option>
                        </select>
                   </div>
                   <div><textarea onChange={handleOnChange} value={tripData.notes} name='notes' cols={55} rows={10}></textarea></div>
                   <button type='submit' className='button-add-save'>{tripData.id ? 'Save' : 'Add Trip'}</button>
                   {tripData.id && <button type='button' onClick={handleCancel}>Cancel</button>}
                </form>
            </div>
        )
    }


export default TripFormPage