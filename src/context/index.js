import React, { useState, createContext } from 'react'
// import { ACCOUNTS_PAGE_HEADER } from 'AccountsConstants/language/account'
import { hcAxiosInstance } from '../utils/index'
// import { SIGN_IN_CHECK_URL, GET_CALL } from 'AccountsConstants/api_endpoints'

export const HCContext = createContext({
  checkSignIn: () => { },
  isLoggedIn: false,
  hcLoading: false,
  hcLoadingHandler: () => { }
})

export const HCState = ({ children }) => {
  const [hcLoading, hcLoadingHandler] = useState(true)
  const [isLoggedIn, updateLogin] = useState(false)
  const fc = false
  const checkSignIn = () => {
    if (fc) {
      hcLoadingHandler(false)
      updateLogin(true)
    } else {
      hcLoadingHandler(true)
      hcAxiosInstance('/authenticate', 'get', '')
        .then(res => {
          hcLoadingHandler(false)
          updateLogin(true)
        })
        .catch(err => {
          hcLoadingHandler(false)
          updateLogin(false)
        })
    }
  }
  return (
    <HCContext.Provider
      value={{
        isLoggedIn,
        checkSignIn,
        hcLoading,
        hcLoadingHandler
      }}
    >
      {children}
    </HCContext.Provider>
  )
}
