// The pet schema for the database. This needs to be generated for every registed user.
// Various options for parts of the pet are present here. The number will be associated with an image hosted by the server
// As students complete categories they are awarded pet cosmetics options hats, clothes, backgrounds, toys.
// The available options a pet owner has to choose from, and the selected option are stored in this model

const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // gets its ObjectID from the objectID of a user model. Similar to SQL foreign key
        ref: 'user'
    },
    petName: {
        type: String,
        required: true
    },
    petHeadOptions: {  // An array of numbers, all will start off with just 0 (default option), more will be added
        type: [Number],
        default: [0]
    },
    petHeadSelected: {
        type: Number,
        default: 0
    },
    petBodyOptions: { // An array of body options
        type: [Number],
        default: [0]
    },
    petBodySelected: {
        type: Number,
        default: 0
    },
    petFaceOptions: { // Facial expressions 0: Neutral, 1: Happy, 2: Angry, 3: Bored, 4: Sad
        type: [Number],
        default: [0,1,2,3,4] 
    },
    petFaceSelected: {
        type: Number,
        default: 1
    },
    petBackgroundOptions: { // Backgrounds with 5 initial options to choose from
        type: [Number],
        default: [0,1,2,3,4]
    },
    petBackgroundSelected: {
        type: Number,
        default: 0
    },
    petToyOptions: { // Toy for pet to play with
        type: [Number],
        default: []
    },
    petToySelected: {
        type: Number
    }
});

module.exports = Pet = mongoose.model('pet', PetSchema);