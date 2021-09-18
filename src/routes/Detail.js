import React from 'react'
import { connect } from 'react-redux'

const Detail = ({ toDos }) => {
  return (
    <div>
      <h1>{toDos?.text}</h1>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps
  return {
    toDos: state.find((el) => el.id === parseInt(id)),
  }
}
export default connect(mapStateToProps)(Detail)
