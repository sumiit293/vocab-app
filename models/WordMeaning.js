const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MeaningSchema = new Schema({
    _id: String,
    lexicalCategory: [String],
    etymologies: [String],
    senses:[{
        def: String,
        example: String
    }]

})
module.exports = mongoose.model("word_meaning",MeaningSchema);