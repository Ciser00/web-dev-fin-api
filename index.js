const express = require('express')
const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase/app");
//get configuration object so we can comnicate with firebase
const firebaseConfig = {
  apiKey: "AIzaSyBzWEYgpzdo2GFLCBdL5c9diY9kz35UkwI",
  authDomain: "final-project-899dc.firebaseapp.com",
  projectId: "final-project-899dc",
  storageBucket: "final-project-899dc.appspot.com",
  messagingSenderId: "66751587896",
  appId: "1:66751587896:web:e22f59211c23f8f6f8a8cd"
};
firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/creepyPost');
const createPostRoute = require('./routes/createPost');

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.use('/', indexRoute);  //home page   app.use (what the name of it is, file location)
app.use('/create', createPostRoute);  //home page   app.use (what the name of it is, file location)
app.use('/storypost', singlePostRoute);  //home page   app.use (what the name of it is, file location)



app.listen(port, () => {
  console.log("example");
});


//this tells the browe where to look for each page
