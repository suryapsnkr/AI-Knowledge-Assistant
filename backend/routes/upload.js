
const express = require('express')
const router = express.Router()
const Document = require('../models/Document')
const embeddingService = require('../services/embeddingService')

router.post('/', async (req,res)=>{

  const {title, content} = req.body

  const embedding = await embeddingService.generateEmbedding(content)

  const doc = new Document({
    title,
    content,
    embedding
  })

  await doc.save()

  res.json({message:"Document stored successfully"})
})

module.exports = router
