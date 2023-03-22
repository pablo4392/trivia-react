import CardQuestion from './CardQuestion'
import './CardContainer'

const CardContainer = ({questions}) => {
    return(
        <div className="container">
            {questions.map(value => (
                <CardQuestion key={value.question} question={value.question} answer={value.correct_answer} wrongAnswers={value.incorrect_answers} />
            ))}
        </div>
    )
}

export default CardContainer