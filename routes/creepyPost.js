const express = require('express');
const router = express.Router();
//Require firestore
const firestore = require('firebase/firestore/lite');  // /lite
//Initililize firestore database
const db = firestore.getFirestore();

router.get('/:id', (req,res) => {  //HELP CANNOT GET SINGLE POST/USER PAGE
  const creepyPostId = req.params.id;
  const creepyPost = firestore.getDoc(firestore.doc(db, 'creepyPost1', creepyPostId));

  creepyPost
    .then((response) => {
      const post = response.data();
      if(post) return (res.send(post));
      return (res.send("NO DOC"));
    })
    .catch((error) => {
      res.send("no doc sorry ")
    });
});


module.exports = router;
