import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import ToDo from '../ToDo'

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addToDo(text)
    setText('')
  }
  return (
    <div>
      <h1>To do</h1>
      <form onSubmit={onSubmit} action="">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { toDos: state }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
