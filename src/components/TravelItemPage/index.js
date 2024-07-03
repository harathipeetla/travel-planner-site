
import { RiDeleteBin6Fill, RiFileEditFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";


import './index.css'


const TravelItemPage = ({travelDetails, deleteTrip, setCurrentTrip, handleToogleBookMark})=>{
   
    const handleDelete =()=>{
        deleteTrip(travelDetails.id)
    }

    const handleEdit =()=>{
        setCurrentTrip(travelDetails)
    }

    return(
    <div className="travel-item-container">
        <div className="image-container">
            <img 
            src="https://res.cloudinary.com/dzvtpzf6b/image/upload/c_thumb,w_200,g_face/v1719929800/travel-concept-with-baggage_t53x3x.jpg" 
            alt="travel-image"
            className='travel-image'
            />
        </div>
        <div className="icons-container">
            <div className='edit-icon' onClick={handleEdit}>
                <RiFileEditFill className="icon"/>
            </div>
            <div className='delete-icon' onClick={handleDelete}>
                <RiDeleteBin6Fill className="icon"/>
            </div>
        </div>
        <div className="travel-list-container">
            <p>{travelDetails.notes}</p>
            <h4 className="place-name">{travelDetails.start} to {travelDetails.destination}</h4>
            <p className="dates">{travelDetails.avaibleStartDate} to {travelDetails.availableEndDate}</p>
            <p>{travelDetails.travelType} <span onClick={()=> handleToogleBookMark(travelDetails.id)}>{travelDetails.bookmarked ?  <FaRegBookmark/> : <FaBookmark/> }</span></p>
        </div>
        
        </div>
    )
}

export default TravelItemPage