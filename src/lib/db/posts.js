import mongoose from 'mongoose';

const congratsSchema = new mongoose.Schema({
ip: String,
name: String,
congrats: String,
color1: String,
color2: String,
date: Date
})

export const PostDB = mongoose.models.user ?? mongoose.model("congrats", congratsSchema)