import React from 'react'
import { Component } from 'react'

class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false,
    }
  }
  displayAlert() {
    alert(`L'alerte a été déclenchée`)
  }
  setIsFav() {
    this.setState({ isFavorite: !this.state.isFavorite })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setIsFav()}>👉 Cliquer ici 👈</button>
        <p> {this.state.isFavorite && 'deded'} </p>
      </div>
    )
  }
}

export default MyComponent
