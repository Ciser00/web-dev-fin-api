const express = require('express');
const router = express.Router();

const firestore = require('firebase/firestore');  // /lite

const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const queryParams = req.query;
  const{imageChoice, story, storyName, userId, displayName, tldr, imageAlt} = queryParams;
  const setCreepyPost = firestore.addDoc(
    firestore.collection(db, "creepyPost1"),{
        imageChoice,
        story,
        storyName,
        userId,
        displayName,
        tldr,
        imageAlt
      });  //USER NAME IS NULL?
  setCreepyPost
    .then((response) =>{
      res.send(response);
    })
    .catch((error) => {
      console.warn(error);
      res.send(error);
    });
});

module.exports = router;
