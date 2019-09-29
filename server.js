const express = require('express')

const app = express()

const proxy = require('http-proxy-middleware')

const cors = require('cors')

// const expressWinston = require("express-winston");
// const winston = require("winston"); // for transports.Console

const serverConfig = require('./config/server.config.dev')

//Get the authtoken from ct-auth cookie
let authToken = ''
const OTP_flow = false
const proxyOptions = {
  target: serverConfig.PROXY, // target host
  changeOrigin: true, // needed for virtual hosted sites
  logLevel: 'debug',
  autoRewrite: true,
  protocolRewrite: 'http',
  onProxyReq: (proxyReq, req, res) => {
    if (OTP_flow) {
      proxyReq.setHeader(
        'Cookie',
        'ct.html5.capable=true; ct-auth-no-login=' + authToken + '; Path=/'
      )
    } else {
      proxyReq.setHeader(
        'Cookie',
        'ct.html5.capable=true; ct-auth=' + authToken + '; Path=/'
      )
    }
  }
}

// app.use(expressWinston.logger({
//   transports: [
//     new winston.transports.Console({
//       json: true,
//       colorize: true
//     })
//   ]
// }));
app.use(cors())
const gatewayProxy = proxy(
  [
    '/communication/selfcare/api/trips',
    '/partial/account/profile',
    '/partial/account/wallet',
    '/partial/account/trips/completed_cancelled',
    '/communication/selfcare/api/tripDetails/',
    '/communication/selfcare/api/tripList',
    '/communication/selfcare/api/connectToAgent'
  ],
  proxyOptions
)
app.use(gatewayProxy)

// app.get('/m/pwa/health-check', (request, response) => {
//   return response.status(200).send('200 OK')
// })

app.listen(serverConfig.PORT, serverConfig.HOST, err => {
  if (err) {
    console.log(err)
    return
  }

  console.log(`Listening at http://${serverConfig.HOST}:${serverConfig.PORT}`)
})
