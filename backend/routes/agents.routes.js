const express = require('express')
const router = express.Router()

//import the controllers file for functions
const agentController = require('../controllers/agents.controller')


router.get('/getagents', agentController.getAllAgents)
router.get('/getagents/:id', agentController.getOneAgent)
router.post('/createagent', agentController.create)
router.put('/agents/:id/update', agentController.updateAgent)
router.delete('/delete/:id', agentController.deleteAgent)


module.exports = router