import mongoose from "mongoose";

const { Schema } = mongoose;

const meetupScheme = new Schema({
  title: String, // String is shorthand for {type: String}
  image: String,
  address: String,
  description: String,
});

export default mongoose.models.MeetupsNew ||
  mongoose.model("MeetupsNew", meetupScheme);
