import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
        <h2>Hello</h2>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
