import Fetch from '../fetch/fetch'
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { handleQuestionUpdate, handleScore } from '../redux/action';
import { decode } from 'html-entities'
const Performance = () => {
  const {
    category,
    level,
    nOQ,
    score,
    Questions
  } = useSelector(state => state)
  console.log(Questions)
  return (
    <div>

    </div>
  )
}

export default Performance
