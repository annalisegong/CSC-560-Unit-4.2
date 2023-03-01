module.exports = mongoose => {
    const Player = mongoose.model(
        "player",
        mongoose.Schema(
            {
            //_id:{type: String, required: true},
            personal_Details:[{
                First_Name: {type: String, required: true},
                Last_Name: {type: String, required: true},
                Grade: {type: String, required: true}}],
            player_Details:[{
                position: {type: String, required: true},
                jersey_number: {type: Number, required: true}}],
            stats:[{
                goals_scored:  {type: Number, required: true},
                assists:  {type: Number, required: true},
                goals_saved:  {type: Number, required: true}}]
            }
        )
    );

    /*schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
    const playerSchema = mongoose.model("player", schema);*/

    return Player;
};

/*playerModel.js
const mongoose = require('mongoose');
//schema maps to mongoDB collection and defines the shape of the documents within the collection
const playerSchema = new mongoose.Schema({
    _id:{type: String, required: true},
    personal_Details:[{
        First_Name: {type: String, required: true},
        Last_Name: {type: String, required: true},
        Grade: {type: String, required: true}}],
    player_Details:[{
        position: {type: String, required: true},
        jersey_number: {type: Number, required: true}}],
    stats:[{
        goals_scored:  {type: Number, required: true},
        assists:  {type: Number, required: true},
        goals_saved:  {type: Number, required: true}}]
});

playerSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});*/
//converting player schema into model; all models are instances of documents and automtically adds _id property
//module.exports = mongoose.model('Player', playerSchema)

/*module.exports.get = function(callback, limit)
{
    Player.find(callback).limit(limit);
}*/