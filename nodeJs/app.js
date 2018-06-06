
//creates object express module
const express = require('express')

//creating routes
const routes = require('./routes')

//helps set up your path 
const path = require('path')
//runs express module
const app = express()

//set the view engine and version  of control
app.set('view engine', 'ejs')

//this creates a static file server, allows client to download individual files to run the app
app.use(express.static(path.join(__dirname, 'public')))

//this is home route
app.get('/', routes.home)

//about route
app.get('/about', routes.about)

//sets up your port 
app.listen(3000, () => console.log('app listening on port 3000'))