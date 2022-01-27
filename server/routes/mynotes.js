const express = require("express");
const router = express.Router();
const mynotes = require("../data/mynotes.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    res.status(200).json(mynotes);
})

router.post('/', (req, res) => {
    const {transcript} = req.body;

    mynotes.push({
        id: uuidv4(),
        timestamp: Date.now(),
        transcript
    });

    fs.writeFile("./data/mynotes.json", JSON.stringify(mynotes, null, 2), () => ('note has been saved'))
    res.json({success: true, mynotes});
})

module.exports = router;