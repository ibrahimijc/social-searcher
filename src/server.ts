import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
dotenv.config()
//import routers
import reqHandler from './router/ReqHandler'
//server class
class Server {
  public app: express.Application
  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  public config() {
    //config
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({extended: false}))
  }

  public routes(): void {
    let router: express.Router
    router = express.Router()

    this.app.use('/', router)
    this.app.use('/search', reqHandler)
  }
}

export default new Server().app
