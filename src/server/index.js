import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import session from 'express-session'
import SessionStore from 'session-file-store'
import bodyParser from 'body-parser'
import config from '../../webpack.config.js'
import ApiRouter from './ApiRouter'
import path from 'path'
import yargs from 'yargs'
import fs from 'fs'
import http from 'http'
import https from 'https'
import compression from 'compression'
import passport from 'passport'
import { Strategy } from 'passport-github'


const args = yargs.default('env', 'development').argv
const app = express()
const compiler = webpack(config(args.env || 'development'))

const GITHUB_CLIENT_ID = 'c318c73d6e511c50da50'
const GITHUB_CLIENT_SECRET = 'cea0e92d9deca84ec66272d87d6d8366eba0f9f1'

app.use(session({
  name: 'SessionID',
  secret: process.env.sessionSecret,
  saveUninitialized: true,
  resave: true,
  store: new SessionStore(session)()
}))
app.use(express.static('build'))
app.use(express.static('public'))
app.use(webpackMiddleware(compiler, { stats: { colors: true } }))
app.use(webpackHotMiddleware(compiler, { stats: { colors: true } }))
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression({ threshold: 0 }))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Key, Content-Encoding')
  next()
})



passport.use(new Strategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3030/'
},
(accessToken, refreshToken, profile, done) => {
  // asynchronous verification, for effect...
  process.nextTick(() => {
    // To keep the example simple, the user's GitHub profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the GitHub account with a user record in your database,
    // and return that user instead.
    return done(null, profile)
  })
}
))

app.get('/auth/github', passport.authenticate('github'))

app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }),
  function(req, res){
  // The request will be redirected to GitHub for authentication, so this
  // function will not be called.
  })


app.post('/login', ApiRouter.login)

app.get('*', (request, response) => {
  response.sendFile(path.resolve('public', 'index.html'))
})

const credentials = {
  key: fs.readFileSync('./sslcert/server.key'),
  cert: fs.readFileSync('./sslcert/server.crt')
}
app.set('port', process.env.HTTPS_PORT)

const httpServer = http.createServer(app)
httpServer.listen(process.env.HTTP_PORT, () => console.log(`Listening on port ${process.env.HTTP_PORT}`))

const httpsServer = https.createServer(credentials, app)
httpsServer.listen(process.env.HTTPS_PORT, () => console.log(`Listening on port ${process.env.HTTPS_PORT} for SECURED`))
