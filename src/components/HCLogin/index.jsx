import React from 'react'
import './_HC_login.scss'
import secure from '../../images/secure.png'
import deals from '../../images/deals.png'
import key from '../../images/key.png'

const HC_login = props => {
  let header = 'Login to your account'
  let buttonText = 'Login'
  // const signUpDescription = ""
  const isSignup = true
  if (isSignup) {
    header = 'Join Hahacars'
    buttonText = 'Sign up'
  }
  return (
    <React.Fragment>
      <div className="hc-overlay" />
      <div className="hc-login-container">
        <div className="left-pane">
          <div>Car becho fatak se!</div>
          <div className="features">
            <img src={key} alt="" />
            <div>Avoids hassles reselling your car</div>
          </div>
          <div className="features">
            <img src={deals} alt="" />
            <div>Best deals available at one click</div>
          </div>
          <div className="features">
            <img src={secure} alt="" />
            <div>Safe and secure</div>
          </div>
        </div>
        <div className="right-pane">
          <span className="close-login">x</span>
          <hr />
          <div>
            {header}
          </div>
          <If condition={!isSignup}>
            <div>
              <input type="text" name="" id="" />
              {/* <span className="hover-label">Username</span> */}
            </div>
            <div>
              <input type="text" name="" id="" />
              {/* <span className="hover-label">Password</span> */}
            </div>
          </If>
          <If condition={!isSignup}>
            <div>
              <input type="text" name="" id="" />
              {/* <span className="hover-label">Username</span> */}
            </div>
            <div>
              <input type="text" name="" id="" />
              {/* <span className="hover-label">Password</span> */}
            </div>
          </If>
          <div>
            <button type="button"> {buttonText} </button>
          </div>
          <If condition={!isSignup}>
            <div className="login-links">
              Forgot password? <span>Click here</span>
            </div>
            <div className="login-links">
              Dont have an account yet? <span>Sign up</span>
            </div>
          </If>
          <If condition={isSignup}>
            <div className="login-links">
              Already a registered user? <span>Sign in</span>
            </div>
          </If>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HC_login
