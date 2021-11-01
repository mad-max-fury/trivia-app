import './questionsLayout.css'
import Fetch from '../fetch/fetch'
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { handleQuestionUpdate, handleScore } from '../redux/action';
import { decode } from 'html-entities'
const QuestionsLayout = () => {
  const {
    category,
    level,
    nOQ,
    score,
    Questions
  } = useSelector(state => state)


  let apiUrl = `api.php?amount=${nOQ}`
  if (category) {
    apiUrl = apiUrl.concat(`&category=${category}`)
  }
  if (level) {
    apiUrl = apiUrl.concat(`&difficulty=${level}`)
  }

  const { response, error, loading } = Fetch({ url: apiUrl })

  const history = useHistory()
  const dispatch = useDispatch()
  const [questionindex, setQuestionindex] = useState(0)
  const [answers, setAnswers] = useState([])


  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionindex]
      const answers = [...question.incorrect_answers]

      answers.splice(Math.floor(Math.random() * Math.floor(question.incorrect_answers.length)), 0, question.correct_answer)
      setAnswers(answers)
    }
  }, [response, questionindex])

  const handleAnswerClick = (ev) => {
    console.log(Questions)
    if (ev.target.textContent === response.results[questionindex].correct_answer) {
      dispatch(handleScore(score + 1))

      // console.log(response.results[questionindex].correct_answer)
      // console.log('your ans', ev.target.textContent)
    }
    if (ev.target.textContent !== response.results[questionindex].correct_answer) {
      // dispatch(handleQuestionUpdate(([response.results[questionindex].question])))
      // console.log(response.results[questionindex].question)
      // console.log(response.results[questionindex].correct_answer)
      // console.log('your ans', ev.target.textContent)
    }
    if (questionindex + 1 < response.results.length) {
      console.log(questionindex)
      setQuestionindex(questionindex + 1)

    } else {
      history.push('/result')
    }
  }

  if (loading) {
    return <div className='questionForm'>
      loading...
    </div>
  }
  if (error) {
    return (<div className='questionForm'>
      <h1>Some Thing went Wrong 😒😒😒</h1>
    </div>
    )
  }
  return (
    <div className='questionForm'>
      <div className="questionScreen">
        <div className="questionNum_scoreBoard">
          <div> Question : <span className="currentQuestion">{questionindex + 1}</span>/ <span className='leftQuestion'>{response.results.length}</span></div>
          <div>Score : <span className="correctAns">{score}</span>/ <span className='leftQuestion'>{response.results.length}</span></div>
        </div>
        <div className='question'>{decode(response.results[questionindex].question)}</div>
        <div className="answerBtns">
          {answers.map((answer, i) => <button key={i} onClick={handleAnswerClick}>{decode(answer)}</button>)}
        </div>
      </div>
      {/* <div className="">
        <button></button>
        <button></button>

      </div> */}
    </div>

  )
}

export default QuestionsLayout
