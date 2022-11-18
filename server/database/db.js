import mongoose from 'mongoose';

export const Connection=async(url)=>{
    try {
        await mongoose.connect(url,{useNewUrlParser:true});
        console.log('connected');
    } catch (err) {
        console.log(err);
    }
}