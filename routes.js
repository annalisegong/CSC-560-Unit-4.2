//routes.js
const express = require('express');
const router = express.Router(); //initialize express router
const Model = require('./model/playerModel')

//default API response; implement REST methods of Post, Get, Patch, Delete
router.get('/', function(req, res)
{
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//get all method
router.get('/getAll', async (req, res) => {
    try{
        const players = await Model.find();
        res.json(players)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//get by ID method
router.get('/getOne/:id', async (req, res) => {
    try{
        const player = await Model.findById(req.params.id);
        res.json(player)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//post method
router.post('/post', async (req, res) => {
    const player = new Model({
        personal_Details:[{
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Grade: req.body.Grade}],
        player_Details:[{
        position: req.body.position,
        jersey_number: req.body.jersey_number}],
        stats:[{
        goals_scored: req.body.goals_scored,
        assists: req.body.assists,
        goals_saved: req.body.goals_saved}]
    })
    try{
        const dataToSave = player.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//update method -- put may need to change to 'patch'
router.patch('/update/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const udpatedPlayer = req.body;
        const options = {new: true};

        const result = await Model.findByIdAndUpdate(
            id, udpatedPlayer, options
        )
        res.send(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//delete method
router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const player = await Model.findByIdAndDelete(id);
        res.send('Document with ${player.First_Name} has been deleted')
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router; //Export API routes

/*var playerController = require('./playerController'); //Import playerController

// Bio routes
router.route('/player')
    .get(playerController.index)
    .post(playerController.add);
router.route('/player/:player_id')
    .get(playerController.view)
    .patch(playerController.update)
    .put(playerController.update)
    .delete(playerController.delete);*/