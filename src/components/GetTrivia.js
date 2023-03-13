import { useEffect, useState } from "react";
import Services from "../service/services";
import "./getTrivia.css";

const GetTrivia = () => {
    const [category, setCategory] = useState([])
    
    useEffect(() => {
        Services.category().then(promise => {
            setCategory(promise.data.trivia_categories)
        })
    }, [])

    return(
    <form className="trivia-form">
    
        <select className="select-form">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
        </select>
    
        <select className="select-form">
            {category.map(value => (
                <option key={value.id} value={value.id}>{value.name}</option>
            ))}
        </select>

        <select className="select-form">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard"> Hard </option>
        </select>

        <select className="select-form">
            <option value="multiple">Multiple choice</option>
            <option value="boolean">true/false</option>
        </select>
    </form>
    );
}

export default GetTrivia