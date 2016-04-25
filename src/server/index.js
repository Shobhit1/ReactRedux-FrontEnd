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

const args = yargs.default('env', 'development').argv
const app = express()
const compiler = webpack(config(args.env || 'development'))
console.log(config)

app.use(session({
  name: 'SessionID',
  secret: process.env.sessionSecret,
  saveUninitialized: true,
  resave: true,
  store: new SessionStore(session)()
}))

app.use(express.static('build'))
app.use(webpackMiddleware(compiler, { stats: { colors: true } }))
app.use(webpackHotMiddleware(compiler, { stats: { colors: true } }))
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/login', ApiRouter.login)

app.get('*', (request, response) => {
  response.sendFile(path.resolve('src', 'index.html'))
})

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))
