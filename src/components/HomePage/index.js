import { Component } from "react"
import { v4  as uuid } from "uuid"

import HeaderPage from "../HeaderPage"
import TravelItemPage from "../TravelItemPage"
import TripFormPage from "../../TripFormPage"
import './index.css'


const initialTripList =[
        {
            id:1,
            start:'Bengaluru',
            destination:'Bali',
            avaibleStartDate: '20/12/2021',
            availableEndDate:'15/01/2025',
            travelType:'Plane',
            notes:'Bali is a province and island in Indonesia, located in the Lesser Sunda Islands, east of Java and west of Lombok', 
            bookmarked:false
        },
        {
            id:2,
            start:'Bengaluru',
            destination:'Bali',
            avaibleStartDate: '20/12/2022',
            availableEndDate:'15/01/2025',
            travelType:'Plane',
            notes:'Bali is a province and island in Indonesia, located in the Lesser Sunda Islands, east of Java and west of Lombok', 
            bookmarked:false
        },
        {
            id:3,
            start:'Bengaluru',
            destination:'Bali',
            avaibleStartDate: '20/12/2023',
            availableEndDate:'15/01/2025',
            travelType:'Plane',
            notes:'Bali is a province and island in Indonesia, located in the Lesser Sunda Islands, east of Java and west of Lombok', 
            bookmarked:false
        }

    ]



class  HomePage extends Component {
    state ={
        tripList : [],
        currentTrip: null,
        searchQuery:''
    }


    componentDidMount(){
        const savedTrips = localStorage.getItem('tripList')
        this.setState({
            tripList: savedTrips ? JSON.parse(savedTrips) : initialTripList 
    })
        
    }


    componentDidUpdate(prevState){
        if(prevState.tripList !== this.state.tripList){
            localStorage.setItem('tripList', JSON.stringify(this.state.tripList))
        }
    }

    addTrip =(newTrip)=>{
        newTrip.id = uuid()
        this.setState((prevState) =>({
          tripList:[...prevState.tripList, newTrip]
        }))
    }


    deleteTrip =(tripId)=>{
        const updatedTripList = this.state.tripList.filter((trip) => trip.id !== tripId);
        this.setState({tripList: updatedTripList})
    }


    editTrip = (updateTrip)=>{
        const updatedTripList = this.state.tripList.map(trip => trip.id === updateTrip.id ? updateTrip : trip)
        this.setState({tripList: updatedTripList, currentTrip:null})
           
    }

    setCurrentTrip =(trip) =>{
        this.setState({currentTrip:trip})
    }


    handleSearchChnage =(e)=>{
        this.setState({searchQuery:e.target.value})
    }


    handleToogleBookMark =(tripId) =>{
        const updatedTripList = this.state.tripList.map((trip)=>
            trip.id === tripId ? {...trip, bookmarked: !trip.bookmarked } : trip
        )

        this.setState({tripList: updatedTripList})
    }


    render(){
        const {tripList, searchQuery} = this.state
        const filteredTripList = tripList.filter((trip)=>
            trip.start.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trip.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trip.travelType.toLowerCase().includes(searchQuery.toLowerCase())
        )
    return(
        <div className="home-page-container">
            <HeaderPage/>
            <div className="trip-form-section">
                <TripFormPage 
                addTrip = {this.addTrip}
                editTrip ={this.editTrip}
                currentTrip = {this.state.currentTrip}
                setCurrentTrip = {this.setCurrentTrip}
                />
            </div>
            <div className="header-section">
                <h1>Your Travel List</h1>
                <div>
                    <input type="search" onChange={this.handleSearchChnage} placeholder="serach your travels "/>
                </div>
            </div>
            <div className="travel-items-conatiner">
                {filteredTripList.map(eachItem =>(
                    <TravelItemPage 
                    key={eachItem.id}
                    travelDetails = {eachItem} 
                    deleteTrip ={this.deleteTrip}
                    setCurrentTrip ={this.setCurrentTrip}
                    handleToogleBookMark = {this.handleToogleBookMark}
                    />
                ))}
            </div>
        </div>
    )
}
}

export default HomePage