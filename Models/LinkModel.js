import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({    
    orginalUrl:{
        type: String,
        required: true
    }
})

export default mongoose.model("links",LinkSchema)