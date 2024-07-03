import { useState } from "react"

import './index.css'

const FeedBackFormPage =({addFeedback})=>{
    const initialFeedback ={
        name:'',
        experience:'',
        suggestions:''
    }

    const [feedbackData, setFeedbackData] = useState(initialFeedback)

    const handleOnChange = (e)=>{
        const {name, value} = e.target
        setFeedbackData((prevState)=> ({...prevState, [name]: value}))
    }

    const handleCancel = ()=>{
        setFeedbackData(initialFeedback)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        addFeedback(feedbackData)
        setFeedbackData(initialFeedback)
    }


    return(
        <div className="feedback-form-container">
            <form className="feedback-form" onSubmit={handleSubmit}>
                <h2>Give Your Feedback here...</h2>
                <div><input type="text" name="name" placeholder="enter your name.." value={feedbackData.name} onChange={handleOnChange}/></div>
                <div><textarea type="text" name="experience" placeholder="enter your experince" value={feedbackData.experience} onChange={handleOnChange}/></div>
                <div><textarea type="text" name="suggestions" placeholder="enter your suggestions" value={feedbackData.suggestions} onChange={handleOnChange}/></div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>


        </div>
    )
}

export default FeedBackFormPage