
const express = require('express')
const router = express.Router()
const Document = require('../models/Document')
const retrievalService = require('../services/retrievalService')

router.post('/', async (req,res)=>{

  const {question} = req.body

  const answer = await retrievalService.answerQuestion(question)

  res.json({answer})

})

module.exports = router
