import { RiDeleteBin6Fill} from 'react-icons/ri'

import './index.css'
const FeedbackListPage =({feedbacks =[], deleteFeedback} )=>{
    return(
        <div className="feed-back-list-container">
            <h1>Feedbacks</h1>
            <ul className="list-feedback">
                {feedbacks.map((feedback, index) =>{
                    return(
                    <li key={index} >
                        <div className='name-container'>
                            <p className='first-letter'>{feedback.name[0]}</p>
                        </div>
                        <div>
                            <p>{feedback.experience}</p>
                            <p>{feedback.suggestions}</p>
                            <div className='delete-icon' onClick={()=> deleteFeedback(index)}>
                            <RiDeleteBin6Fill/>
                        </div>
                        </div>
                        
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FeedbackListPage