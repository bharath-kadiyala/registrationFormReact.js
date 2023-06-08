import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isSubmitted: false,
    error1: '',
    error2: '',
  }

  onAddApplication = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state
    if (firstName === '' || lastName === '') {
      if (firstName === '') {
        this.setState({error1: 'Required'})
      }
      if (lastName === '') {
        this.setState({error2: 'Required'})
      }
    } else {
      this.setState({isSubmitted: true})
    }
  }

  showErrorMsg1 = event => {
    if (event.target.value === '') {
      this.setState({error1: 'Required'})
    } else {
      this.setState({error1: ''})
    }
  }

  showErrorMsg2 = event => {
    if (event.target.value === '') {
      this.setState({error2: 'Required'})
    } else {
      this.setState({error2: ''})
    }
  }

  firstNameInput = event => {
    this.setState({firstName: event.target.value})
  }

  lastNameInput = event => {
    this.setState({lastName: event.target.value})
  }

  addAnotherApplication = () => {
    this.setState({
      firstName: '',
      lastName: '',
      isSubmitted: false,
      error1: '',
      error2: '',
    })
  }

  renderAnotherApplication = () => (
    <div className="success-con">
      <img
        className="success-img"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="success-pera">Submitted Successfully</p>
      <button
        type="button"
        className="success-btn"
        onClick={this.addAnotherApplication}
      >
        Submit Another Application
      </button>
    </div>
  )

  renderSubmitApplication = () => {
    const {firstName, lastName, error1, error2} = this.state

    const additionalDetail1 = error1 === 'Required' ? 'input-bg' : null
    const additionalDetail2 = error2 === 'Required' ? 'input-bg' : null
    return (
      <div>
        <div className="firstName-con">
          <label className="label-sty" htmlFor="firstNameId">
            FIRST NAME
          </label>
          <input
            className={`input-sty ${additionalDetail1}`}
            id="firstNameId"
            type="text"
            value={firstName}
            placeholder="First name"
            onBlur={this.showErrorMsg1}
            onChange={this.firstNameInput}
          />
          <p className="error-msg">{error1}</p>
        </div>

        <div className="lastName-con">
          <label className="label-sty" htmlFor="lastNameId">
            LAST NAME
          </label>
          <input
            className={`input-sty ${additionalDetail2}`}
            id="lastNameId"
            type="text"
            value={lastName}
            placeholder="Last name"
            onBlur={this.showErrorMsg2}
            onChange={this.lastNameInput}
          />
          <p className="error-msg">{error2}</p>
        </div>
        <div className="btn-con">
          <button type="submit" className="btn-sty">
            Submit
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="main-con">
        <h1 className="title">Registration</h1>
        <div className="app-con">
          <form className="form-con" onSubmit={this.onAddApplication}>
            {isSubmitted
              ? this.renderAnotherApplication()
              : this.renderSubmitApplication()}
          </form>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
