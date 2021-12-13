const express = require('express');
//Middle ware to alllow for routing on the node server
const router = express.Router();
//Require firestore
const firestore = require('firebase/firestore/lite');  // /lite
//Initililize firestore database
const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const creepyPosts = firestore.getDocs(firestore.collection(db, "creepyPost1"));
  const creepyPostsArray = [];
  creepyPosts
    .then((response) => {
      response.forEach((doc) =>{
        const docData = doc.data();
        docData.id = doc.id;
        //push document into array every time the query loops over
        creepyPostsArray.push(docData);
      });
      return res.send(creepyPostsArray);
    })
    .catch(function(error){
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;
