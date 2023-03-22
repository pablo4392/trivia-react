import './App.css';
import {useForm} from "react-hook-form";
import { useEffect, useState } from 'react';
import Services from './service/services';
import GetTrivia from './components/GetTrivia';
import CardContainer from './components/CardContainer'

function App() {
  const {register, handleSubmit} = useForm();
  const [questions, setQuestions] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [type, setType] =useState('');
  const [dataTrivia, setDataTrivia] = useState(null);

  const submit = (data) => {
      setQuestions(data.questions);
      setCategory(data.category);
      setLevel(data.level);
      setType(data.type);
  }

  useEffect(() => {
    if(questions){
      Services.trivia(questions, category, level, type)
        .then(promise => {
          setDataTrivia(promise.data.results)
        })
    }
  }, [questions, category, level, type])

  return (
    <div className="App">
      {dataTrivia ? (
        <>
          <CardContainer questions={dataTrivia}/>
          <button className='cancel-button' onClick={() => setDataTrivia(null)}>Reset</button>
        </>
        ) : (
          <GetTrivia register={register}  handleSubmit={handleSubmit(submit)}/>
      )}
    </div>
  );
}

export default App;
