
import ConfigLayout from "../components/configLayout"
import './ConfigDifficulty.css'
import { Link, useHistory } from "react-router-dom"
import fetch from "../fetch/fetch"




const ConfigDifficulty = () => {
  const { response, error, loading } = fetch({ url: '/api_category.php' })
  const history = useHistory()
  // console.log(response, error, loading)
  if (loading) {
    return <form>
      loading...
    </form>
  }
  if (error) {
    return (<form>
      <h1>Some Thing went Wrong 😒😒😒</h1>
    </form>
    )
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
    history.push('/questions')
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor={'NOQ'}></label> */}
      <ConfigLayout label='category' opts={response.trivia_categories} />
      <ConfigLayout label='level' opts={[{ id: 'Easy', name: 'Easy' }, { id: 'Medium', name: 'Medium' }, { id: 'Hard', name: 'Hard' }]} />
      <ConfigLayout label="nOQ" type={'number'} />

      <Link to='/questions'><button type='submit'>Begin</button></Link>
    </form>
  )
}

export default ConfigDifficulty
