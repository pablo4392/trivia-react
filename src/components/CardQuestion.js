import { useEffect, useState } from "react";
import "./cardQuestion.css";

const CardQuestion = ({question, answer, wrongAnswers}) => {
    const answersArray = wrongAnswers.push(answer)

    console.log(answersArray)

    return(
        <div className="card-question">
            <p>{question}</p>
        </div>
    )
}

export default CardQuestion