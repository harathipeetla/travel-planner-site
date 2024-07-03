import { useEffect, useState } from "react";
import FeedBackFormPage from "../FeedbackFormPage";
import FeedbackListPage from "../FeedbackListPage";
import HeaderPage from "../HeaderPage";

import './index.css'

const FeedbackContainerPage =()=>{
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(()=>{
        const storedFeedbacks = localStorage.getItem('feedbacks');
        if(storedFeedbacks){
            setFeedbacks(JSON.parse(storedFeedbacks))
        }
    }, [])


    const addFeedback = (feedback) =>{
        const newFeedbacks = [...feedbacks, feedback];
        setFeedbacks(newFeedbacks)
        localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks))
    }

    const deleteFeedback =(index)=>{
        const newFeedbacks = feedbacks.filter((_, i) => i !== index);
        setFeedbacks(newFeedbacks)
        localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks))
    }

    return(
        <div className="feedback-container">
            <HeaderPage/>
            <FeedBackFormPage addFeedback={addFeedback}/>
            <FeedbackListPage feedbacks = {feedbacks} deleteFeedback={deleteFeedback}/>

        </div>
    )
}

export default FeedbackContainerPage;