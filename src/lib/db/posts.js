import mongoose from 'mongoose';

const congratsSchema = new mongoose.Schema({
ip: String,
name: String,
congrats: String,
color: String,
date: Date
})

export const PostDB = mongoose.models.user ?? mongoose.model("congrats", congratsSchema)