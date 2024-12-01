import mongoose from "mongoose";


const Work = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    predmet: {type: String, required: true},
    document: [String]
})

export default mongoose.model('Work', Work)