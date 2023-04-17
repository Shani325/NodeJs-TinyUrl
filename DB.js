import mongoose from 'mongoose'

const uriLocal='mongodb://localhost:27017/NodeJsProject'

const connectDB=async()=>{
    await mongoose.connect(uriLocal).then(()=>
        console.log("connected")
    ).catch(()=>
        console.log("not connected")
    )
}

const database=mongoose.connection;

export default connectDB;