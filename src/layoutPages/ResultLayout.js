import './resultLayout.css'
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { handleCategory, handlenOQ, handleScore } from '../redux/action';


const ResultLayout = () => {
  const {
    level,
    nOQ,
    score
  } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const handlePlayAgain = () => {
    dispatch(handleScore(0))
    dispatch(handlenOQ(20))
    dispatch(handleCategory(''))
    history.push('/')
  }
  const handlePerformanceReport = () => {
    history.push('/performance')
  }
  return (
    <div className="resultWrapper">
      <h1>Question Complete</h1>
      <h4>Performance Summary:</h4>
      <ul>
        <li>Level : <span>{level.toUpperCase()}</span> </li>
        <li>Total Question : <span>{nOQ}</span></li>
        <li>Total Score : <span>{score}</span></li>
        <li>Percentage score : <span>{((score / nOQ) * 100).toFixed(1) + '%'}</span></li>
      </ul>
      <button onClick={handlePlayAgain}>Play Again</button>
      <button onClick={handlePerformanceReport}>See Full Performance Report</button>


    </div>
  )
}

export default ResultLayout

