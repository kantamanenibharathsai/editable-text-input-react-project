import {Component} from 'react'

import './index.css'

class UserInteractive extends Component {
  state = {isSavedBtnVisible: true, userEnteredValue: ''}

  onClickSaveBtn = () => {
    this.setState({isSavedBtnVisible: false})
  }

  onClickEditBtn = () => {
    this.setState({isSavedBtnVisible: true})
  }

  onchangeInputEl = event => {
    this.setState({userEnteredValue: event.target.value})
  }

  render() {
    const {isSavedBtnVisible, userEnteredValue} = this.state
    return (
      <div className="main-container">
        {isSavedBtnVisible ? (
          <div className="input-save-container">
            <h1 className="editable-text-heading">Editable Text Input</h1>
            <div className="child-input-container">
              <input
                type="text"
                className="input-element"
                value={userEnteredValue}
                onChange={this.onchangeInputEl}
              />
              <button
                type="button"
                onClick={this.onClickSaveBtn}
                className="button"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="input-save-container">
            <h1 className="editable-text-heading">Editable Text Input</h1>
            <div className="child-input-container">
              <p className="paragraph">{userEnteredValue}</p>
              <button
                type="button"
                onClick={this.onClickEditBtn}
                className="button"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default UserInteractive
