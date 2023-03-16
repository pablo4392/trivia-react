import './App.css';
import {useForm} from "react-hook-form";
import GetTrivia from './components/GetTrivia';
import Services from './service/services';
import { useEffect, useState } from 'react';

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
          console.log(promise.data.results)
        })
    }
  }, [questions, category, level, type])

  return (
    <div className="App">
      {dataTrivia ? (
        <>
          <button className='cancel-button' onClick={() => setDataTrivia(null)}>Reset</button>
        </>
        ):(
        <GetTrivia register={register}  handleSubmit={handleSubmit(submit)}/>
      )}
    </div>
  );
}

export default App;
