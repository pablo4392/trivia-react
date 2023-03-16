import { useEffect, useState } from "react";
import Services from "../service/services";
import "./getTrivia.css";

const GetTrivia = ({register, handleSubmit}) => {
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        Services.category().then(promise => {
            setCategory(promise.data.trivia_categories)
        })
    }, [])

    return(
        <div className="trivia-container">
            <h1 className="title-trivia">TRIVIA GAME!</h1>
            <form className="trivia-form" onSubmit={(e) => handleSubmit(e)}>

                <div className="select-container">
                    <label htmlFor="questions">Questions:</label>
                    <select className="select-form" id="questions" {...register('questions')}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                </div>

                <div className="select-container">
                    <label htmlFor="category">Category:</label>
                    <select className="select-form" id="category" {...register('category')}>
                        {category.map(value => (
                            <option key={value.id} value={value.id}>{value.name}</option>
                            ))}
                    </select>
                </div>

                <div className="select-container">
                    <label htmlFor="level">Level:</label>
                    <select className="select-form" id="level" {...register('level')}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard"> Hard </option>
                    </select>
                </div>

                <div className="select-container">
                    <label htmlFor="type">Type:</label>
                    <select className="select-form" id="type" {...register('type')}>
                        <option value="multiple">Multiple choice</option>
                        <option value="boolean">true/false</option>
                    </select>
                </div>

                <button className="button-form" type="submit"> Let's to play </button>
            </form>
        </div>
    );
}

export default GetTrivia