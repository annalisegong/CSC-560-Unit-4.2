//playerController.js
//Import Player model
Player = require('./playerModel');
//For index
exports.index = function (req, res) {
    Player.get(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got players collection successfully!",
            data: player     
        });
    });
};
//For creating new instance of playerBioModel aka document
exports.add = function (req, res) {
    var player = new Player();
    //playerBio._id= req.body._id;
    player.First_Name = req.body.First_Name? req.body.First_Name: player.First_Name;
    player.Last_Name = req.body.Last_Name? req.body.Last_Name: player.Last_Name;
    player.Grade = req.body.Grade;
    player.position = req.body.position;
    player.jersey_number = req.body.jersey_number;
    player.goals_scored = req.body.goals_scored;
    player.assists = req.body.assists;
    player.goals_saved = req.body.goals_saved;
//Save new model/document to db and check error
    player.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: "New document added to players!",
            data: player
        });
    });
};
// View player document
exports.view = function (req, res) {
    Player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
        res.json({
            message: 'Player Details',
            data: player
        });
    });
};
// Update player document
exports.update = function (req, res) {
    player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
            player.First_Name = req.body.First_Name? req.body.First_Name: player.First_Name;
            player.Last_Name = req.body.Last_Name? req.body.Last_Name: player.Last_Name;
            player.Grade = req.body.Grade;
            player.position = req.body.position;
            player.jersey_number = req.body.jersey_number;
            player.goals_scored = req.body.goals_scored;
            player.assists = req.body.assists;
            player.goals_saved = req.body.goals_saved;
        //save and check errors
        player.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "player document Updated Successfully",
                data: player
            });
        });
    });
};
// Delete player document
exports.delete = function (req, res) {
    Player.deleteOne({
        _id: req.params.player_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'player document deleted'
        })
    })
}